import React from "react";
import { Col } from "react-bootstrap";

const HeaderExt = props => {
  return (
    <Col md={5} mdOffset={2} className="flex-container">
      {props.children}
    </Col>
  );
};

export default HeaderExt;
