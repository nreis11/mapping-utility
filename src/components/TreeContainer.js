import React from "react";
import { Col, Well } from "react-bootstrap";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

class TreeContainer extends React.Component {
  componentDidMount() {
    console.log("MOUNTED TREE");
  }

  render() {
    const style = {
      border: "solid",
      height: "65vh",
      overflow: "hidden"
    };

    const { treeKey, activeNode, treeData } = this.props;

    return (
      <Col md={5}>
        <Well style={style} bsSize="small">
          <SortableTree
            treeData={treeData}
            onChange={treeData => this.props.onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            generateNodeProps={({ node }) => {
              return {
                onClick: () => this.props.handleNodeClick(node, treeKey),
                className: activeNode.id === node.id ? "active-node" : null,
                style: {
                  color: node.mapping ? "blue" : null
                }
              };
            }}
          />
        </Well>
      </Col>
    );
  }
}

export default TreeContainer;
