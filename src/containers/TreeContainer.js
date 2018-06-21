import React from "react";
import { func, shape, string, arrayOf, object, bool } from "prop-types";
import TrashIcon from "react-icons/lib/fa/trash";
import { Col, Well } from "react-bootstrap";

import {
  getVisibleNodeInfoAtIndex,
  getVisibleNodeCount,
  map,
  getNodeAtPath,
  changeNodeAtPath
} from "react-sortable-tree";
import SortableTree from "react-sortable-tree";
import AddModal from "../components/modals/AddModal";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

const keyboard = {
  37: false, // left,
  38: false, // up,
  39: false, // right,
  40: false, // down,
  32: false, // space,
  16: false, // shift,
  17: false, // ctrl
  46: false, // del,
  70: false, // F
  71: false, // G
  8: false // backspace
};

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyDown(e) {
    e.preventDefault();
    const {
      treeData,
      treeKey,
      activeNodeInfo,
      handleSelectNode,
      onChange
    } = this.props;
    console.log("ACTIVE NODE: ", activeNodeInfo);
    const getNodeKey = ({ node }) => node.id;

    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = true;
    }

    // Get the current tree index
    let { treeIndex } = activeNodeInfo;
    const initialTreeIndex = treeIndex;
    let expanded = activeNodeInfo.node.expanded;
    const { children } = activeNodeInfo.node;
    const nodeCount = getVisibleNodeCount({ treeData });

    // Increase or decrease tree index depending on key
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
      expanded ? (children ? (treeIndex += 1) : null) : (expanded = true);
    } else if (keyboard[16] && keyboard[32]) {
      console.log("SHIFT + SPACE");
      console.log("Select node and its children. Preserve existing mappings.");
    } else if (keyboard[17] && keyboard[32]) {
      console.log("CTRL + SPACE");
      console.log(
        "Select node and its children. Overwrite any existing mappings."
      );
      // Returns modified tree data array. Get first index.
      const newNode = map({
        treeData: [activeNodeInfo.node],
        getNodeKey,
        // Remember to change to actual mapping
        callback: ({ node }) => ({ ...node, mapping: true }),
        ignoreCollapsed: false
      })[0];
      const newTreeData = changeNodeAtPath({
        treeData,
        path: activeNodeInfo.path,
        newNode: newNode,
        getNodeKey,
        ignoreCollapsed: true
      });
      onChange(newTreeData, treeKey);
      treeIndex += 1;
    } else if (keyboard[16] && keyboard[8]) {
      console.log("SHIFT BACKSPACE");
      console.log(
        "Delete current node & everything under that node, then move up to the previous node."
      );
    } else if (keyboard[32]) {
      console.log("SPACE");
      console.log("Select single node");
    } else if (keyboard[46]) {
      console.log(
        "DELETE: Delete current node mapping and move down to the next node."
      );
    } else if (keyboard[16] && keyboard[46]) {
      console.log(
        "SHIFT DELETE: Delete current node & everything under that node, then move down to the next node."
      );
    } else if (keyboard[8]) {
      console.log(
        "BACKSPACE Delete current node mapping and move up to the previous node."
      );
    }

    // Check bounds
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

    // Set the new active node
    let newActiveNodeInfo;
    if (initialTreeIndex === treeIndex) {
      activeNodeInfo.node.expanded = expanded;
      newActiveNodeInfo = activeNodeInfo;
    } else {
      newActiveNodeInfo = getVisibleNodeInfoAtIndex({
        treeData,
        index: treeIndex,
        getNodeKey
      });
    }
    // Add treeIndex
    handleSelectNode({ ...newActiveNodeInfo, treeIndex }, treeKey);
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
            rowHeight={45}
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
  activeNode: shape({}),
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
  handleRemoveNode: null,
  activeNode: {}
};

export default TreeContainer;
