import React from "react";
import { func, shape, string, arrayOf, object, bool } from "prop-types";
import TrashIcon from "react-icons/lib/fa/trash";

import { Col, Well } from "react-bootstrap";
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
    console.log("Keydown: ", e.keyCode);
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = true;
    }

    if (keyboard[38]) {
      console.log("UP");
    } else if (keyboard[40]) {
      console.log("DOWN");
    } else if (keyboard[37]) {
      console.log("LEFT");
    } else if (keyboard[39]) {
      console.log("RIGHT");
    } else if (keyboard[16] && keyboard[32]) {
      console.log("SHIFT + SPACE");
      console.log("Select node and its children. Preserve existing mappings.");
    } else if (keyboard[17] && keyboard[32]) {
      console.log("CTRL + SPACE");
      console.log(
        "Select node and its children. Overwrite any existing mappings."
      );
    } else if (keyboard[16] && keyboard[8]) {
      console.log("SHIFT BACKSPACE");
      console.log(
        "Delete current node & everything under that node, then move up to the previous node."
      );
    } else if (keyboard[32]) {
      console.log("SPACE");
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
  }

  handleKeyUp(e) {
    console.log("Keyup: ", e.keyCode);
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = false;
    }
  }

  render() {
    const {
      treeKey,
      activeNode,
      treeData,
      onChange,
      handleNodeClick,
      highlightMissingMaps,
      editMode,
      handleRemoveNode,
      onAddNodes
    } = this.props;
    // const treeHeight = treeKey === "intTreeData" ? "65vh" : "75vh";

    // const wellClassName = editMode ? "edit-mode-well" : "norm-well";
    const colSize = editMode ? 12 : 5;

    const missingMapClass = highlightMissingMaps ? " missing-map" : "";
    const getNodeKey = ({ treeIndex }) => treeIndex;

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
                  : () => handleNodeClick(rowInfo, treeKey),
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
  handleNodeClick: func,
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
