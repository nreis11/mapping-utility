import React from "react";
import { func, string, arrayOf, object, bool, shape } from "prop-types";
import TrashIcon from "react-icons/lib/fa/trash";
import { Col, Well } from "react-bootstrap";

import { removeNodeAtPath, getVisibleNodeCount } from "react-sortable-tree";
import { getActiveNode } from "../helpers";
import SortableTree from "react-sortable-tree";
import AddModal from "../components/modals/AddModal";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

const keyboard = {
  37: false, // left,
  38: false, // up,
  39: false, // right,
  40: false // down,
};

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = true;
      e.preventDefault();
    } else {
      return;
    }

    const { treeData, activeNodeInfo, treeKey, handleSelectNode } = this.props;
    let { treeIndex } = activeNodeInfo;
    const initialTreeIndex = treeIndex;
    let expanded = activeNodeInfo.node.expanded;
    const { children } = activeNodeInfo.node;
    const nodeCount = getVisibleNodeCount({ treeData });

    if (keyboard[38]) {
      console.log("UP");
      treeIndex -= 1;
    } else if (keyboard[40]) {
      console.log("DOWN");
      treeIndex += 1;
    } else if (keyboard[37]) {
      console.log("LEFT");
      expanded ? (expanded = false) : (treeIndex -= 1);
    } else if (keyboard[39]) {
      console.log("RIGHT");
      expanded ? children && (treeIndex += 1) : (expanded = true);
    }

    // Check bounds
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

    // Check if node changed. If it didn't, just update expanded prop
    let newactiveNodeInfo;
    if (initialTreeIndex === treeIndex) {
      activeNodeInfo.node.expanded = expanded;
      newactiveNodeInfo = activeNodeInfo;
    } else {
      newactiveNodeInfo = getActiveNode(treeData, treeIndex);
    }
    handleSelectNode({ ...newactiveNodeInfo, treeIndex }, treeKey);
  }

  handleKeyUp(e) {
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = false;
    }
  }

  handleRemoveNode(path) {
    const { treeData, treeKey, onChange } = this.props;
    const getNodeKey = ({ node }) => node.id;
    const newTreeData = removeNodeAtPath({
      treeData,
      path,
      getNodeKey
    });
    onChange(newTreeData, treeKey);
  }

  render() {
    const {
      treeKey,
      activeNodeInfo,
      treeData,
      onChange,
      handleSelectNode,
      highlightUnmapped,
      editMode,
      onAddNodes
    } = this.props;

    const activeNode = activeNodeInfo ? activeNodeInfo.node : {};
    const colSize = editMode ? 12 : 5;
    const unMappedClassName = highlightUnmapped ? "un-mapped" : "";

    return (
      <Col
        md={colSize}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
      >
        <Well className="well">
          <SortableTree
            treeData={treeData}
            onChange={treeData => onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            // Will eventually add search functionality
            // searchQuery={activeNode.title}
            // searchFocusOffset={0}
            generateNodeProps={rowInfo => {
              const { node, path } = rowInfo;
              let className = [];
              if (!editMode) {
                activeNode.id === node.id
                  ? className.push("active-node")
                  : className.push("");
                node.mapping
                  ? className.push("mapped")
                  : className.push(unMappedClassName);
              }

              const buttons = editMode
                ? [
                    <AddModal onAddNodes={onAddNodes} nodeInfo={rowInfo} />,
                    <button onClick={() => this.handleRemoveNode(path)}>
                      <TrashIcon />
                    </button>
                  ]
                : [];

              return {
                onClick: editMode
                  ? null
                  : () => handleSelectNode(rowInfo, treeKey),
                className: className.join(" "),
                buttons: buttons,
                id: node.id
              };
            }}
          />
        </Well>
      </Col>
    );
  }
}

TreeContainer.propTypes = {
  treeKey: string.isRequired,
  treeData: arrayOf(object).isRequired,
  onChange: func.isRequired,
  handleSelectNode: func,
  highlightUnmapped: bool,
  editMode: bool.isRequired,
  onAddNodes: func,
  activeNodeInfo: shape({})
};

TreeContainer.defaultProps = {
  editMode: false,
  onAddNodes: null,
  highlightUnmapped: false,
  handleSelectNode: null,
  activeNodeInfo: {}
};

export default TreeContainer;
