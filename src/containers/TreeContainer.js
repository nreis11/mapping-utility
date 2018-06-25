import React from "react";
import { func, string, arrayOf, object, bool } from "prop-types";
import TrashIcon from "react-icons/lib/fa/trash";
import { Col, Well } from "react-bootstrap";

import { getVisibleNodeCount } from "react-sortable-tree";
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
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = true;
      e.preventDefault();
    } else {
      return;
    }

    const {
      treeData,
      activeNodeInfo,
      getActiveNode,
      treeKey,
      handleSelectNode
    } = this.props;
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
      expanded ? (children &&  (treeIndex += 1)) : (expanded = true);
    }

    // Check bounds
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

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

  render() {
    const {
      treeKey,
      activeNodeInfo,
      treeData,
      onChange,
      handleSelectNode,
      highlightMissingMaps,
      editMode,
      handleRemoveNode,
      onAddNodes
    } = this.props;
    // const treeHeight = treeKey === "intTreeData" ? "65vh" : "75vh";

    const activeNode = activeNodeInfo ? activeNodeInfo.node : {};
    const colSize = editMode ? 12 : 5;

    const missingMapClass = highlightMissingMaps ? " missing-map" : "";
    // const getNodeKey = ({ treeIndex }) => treeIndex;

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
            rowHeight={50}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            generateNodeProps={rowInfo => {
              const { node, path } = rowInfo;
              let className = "";
              if (!editMode) {
                className += activeNode.id === node.id ? "active-node" : "";
                className += node.mapping ? " mapped" : missingMapClass;
              }

              const buttons = editMode
                ? [
                    <AddModal onAddNodes={onAddNodes} nodeInfo={rowInfo} />,
                    <button onClick={() => handleRemoveNode(path)}>
                      <TrashIcon />
                    </button>
                  ]
                : [];

              return {
                onClick: editMode
                  ? null
                  : () => handleSelectNode(rowInfo, treeKey),
                className: className,
                buttons: buttons
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
  highlightMissingMaps: bool,
  editMode: bool.isRequired,
  onAddNodes: func,
  handleRemoveNode: func
};

TreeContainer.defaultProps = {
  editMode: false,
  onAddNodes: null,
  handleRemoveNode: null
};

export default TreeContainer;
