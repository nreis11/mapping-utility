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
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    if (this.props.editMode || !(key in keyboard)) {
      return;
    }

    const { treeData, activeNodeInfo, treeKey, handleSelectNode } = this.props;
    let { treeIndex } = activeNodeInfo;
    const initialTreeIndex = treeIndex;
    let expanded = activeNodeInfo.node.expanded;
    const { children } = activeNodeInfo.node;
    const nodeCount = getVisibleNodeCount({ treeData });

    if (key === 38) {
      console.log("UP");
      treeIndex -= 1;
    } else if (key === 40) {
      console.log("DOWN");
      treeIndex += 1;
    } else if (key === 37) {
      console.log("LEFT");
      expanded ? (expanded = false) : (treeIndex -= 1);
    } else if (key === 39) {
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
      onAddNodes,
      searchString,
      searchFocusIndex,
      onSearchFinish
    } = this.props;

    const activeNode = activeNodeInfo ? activeNodeInfo.node : {};
    const colSize = editMode ? 12 : 5;
    const unMappedClassName = highlightUnmapped ? "un-mapped" : "";

    // Case insensitive search of `node.title`
    const customSearchMethod = ({ node, searchQuery }) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

    return (
      <Col md={colSize} onKeyDown={this.handleKeyDown}>
        <Well className="well">
          <SortableTree
            treeData={treeData}
            onChange={treeData => onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            searchMethod={customSearchMethod}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            searchFinishCallback={matches =>
              editMode || treeKey === "intTreeData"
                ? null
                : onSearchFinish(matches)
            }
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
  activeNodeInfo: shape({}),
  onSearchFinish: func
};

TreeContainer.defaultProps = {
  editMode: false,
  onAddNodes: null,
  highlightUnmapped: false,
  handleSelectNode: null,
  activeNodeInfo: {},
  onSearchFinish: null
};

export default TreeContainer;
