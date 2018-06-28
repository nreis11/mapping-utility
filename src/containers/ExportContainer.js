import React from "react";
import { Col } from "react-bootstrap";

const ExportContainer = props => {
  return (
    <Col style={{ height: "7vh" }} md={1}>
      {props.children}
    </Col>
  );
};

export default ExportContainer;
