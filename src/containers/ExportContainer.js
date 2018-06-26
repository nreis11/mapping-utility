import React from "react";
import { Col } from "react-bootstrap";

const ExportContainer = props => {
  return (
    <Col mdOffset={2} md={5} style={{ height: "4vh" }}>
      {props.children}
    </Col>
  );
};

export default ExportContainer;
