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

    const name = this.props.keyName;

    return (
      <Col md={5}>
        <Well style={style} bsSize="small">
          <SortableTree
            treeData={this.props.treeData}
            onChange={treeData => this.props.onChange(treeData, name)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
          />
        </Well>
      </Col>
    );
  }
}

export default TreeContainer;
