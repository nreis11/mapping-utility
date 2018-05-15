import React from "react";
import { Col, Well } from "react-bootstrap";
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

    // const treeContainerClass = this.props.internal ? "internal" : "board";

    return (
      <Col md={5}>
        <Well style={style} bsSize="small" />
      </Col>
    );
  }
}

export default TreeContainer;
