import React from "react";
import { func, shape, string, arrayOf, object, bool } from "prop-types";
import PlusSign from "react-icons/lib/fa/plus";
import TrashIcon from "react-icons/lib/fa/trash";

import { Col, Well } from "react-bootstrap";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    console.log("Keycode: ", e.keyCode);
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
      handleRemoveNode
    } = this.props;
    // const treeHeight = treeKey === "intTreeData" ? "65vh" : "75vh";

    // const wellClassName = editMode ? "edit-mode-well" : "norm-well";
    const colSize = editMode ? 12 : 5;

    const missingMapClass = highlightMissingMaps ? " missing-map" : "";
    const getNodeKey = ({ treeIndex }) => treeIndex;

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
            generateNodeProps={({ node, path }) => {
              let className = "";
              if (!editMode) {
                className += activeNode.id === node.id ? "active-node" : "";
                className += node.mapping ? " mapped" : missingMapClass;
              }

              const buttons = editMode
                ? [
                    <button
                      onClick={
                        () => console.log(path)
                        // this.setState(state => ({
                        //   treeData: addNodeUnderParent({
                        //     treeData: treeData,
                        //     parentKey: path[path.length - 1],
                        //     expandParent: true,
                        //     getNodeKey,
                        //     newNode: {
                        //       title: "New Title"
                        //     }
                        //   }).treeData
                        // }))
                      }
                    >
                      <PlusSign />
                    </button>,
                    <button onClick={() => handleRemoveNode(path, getNodeKey)}>
                      <TrashIcon />
                    </button>
                  ]
                : [];

              return {
                onClick: editMode ? null : () => handleNodeClick(node, treeKey),
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
  treeKey: string,
  activeNode: shape({}),
  treeData: arrayOf(object).isRequired,
  onChange: func.isRequired,
  handleNodeClick: func,
  highlightMissingMaps: bool,
  editMode: bool.isRequired
};

TreeContainer.defaultProps = {
  editMode: false
};

export default TreeContainer;
