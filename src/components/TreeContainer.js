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
    const { treeKey, activeNode, treeData } = this.props;
    // const treeHeight = treeKey === "intTreeData" ? "65vh" : "75vh";

    const style = {
      border: "solid",
      height: "65vh",
      overflow: "hidden"
    };

    return (
      <Col md={5}>
        <Well style={style} bsSize="small">
          <SortableTree
            treeData={treeData}
            onChange={treeData => this.props.onChange(treeData, treeKey)}
            getNodeKey={({ node }) => node.id}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={30}
            generateNodeProps={({ node }) => {
              let className = "";
              className += activeNode.id === node.id ? "active-node" : "";
              className += node.mapping ? " mapped" : "";

              return {
                onClick: () => this.props.handleNodeClick(node, treeKey),
                className: className
              };
            }}
          />
        </Well>
      </Col>
    );
  }
}

export default TreeContainer;
