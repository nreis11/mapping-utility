import React from "react";
import { Col } from "react-bootstrap";

const HeaderContainer = ({ left, right }) => {
  return (
    <Col style={{ margin: "5px 0", height: 30 }}>
      <Col className="left">{left}</Col>
      <Col className="right">{right}</Col>
      <div style={{ clear: "both" }} />
    </Col>
  );
};

export default React.memo(HeaderContainer);
