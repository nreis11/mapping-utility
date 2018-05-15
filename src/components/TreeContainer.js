import React from "react";
import { Col, Well } from "react-bootstrap";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);

    console.log(typeof this.props.treeData);
  }

  componentDidMount() {
    console.log("MOUNTED TREE");
  }

  // handleChange(treeData) {
  //   this.props.onChange(treeData);
  // }

  render() {
    const style = {
      border: "solid",
      height: "65vh",
      overflow: "hidden"
    };

    const internal = this.props.internal;
    // const treeContainerClass = this.props.internal ? "internal" : "board";

    return (
      <Col md={5}>
        <Well style={style} bsSize="small">
          <SortableTree
            treeData={this.props.treeData}
            onChange={treeData => this.props.onChange(treeData, internal)}
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
