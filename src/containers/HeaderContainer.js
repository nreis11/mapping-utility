import React from "react";
import { Col } from "react-bootstrap";
import "./HeaderContainer.css";

const HeaderContainer = ({ left, right }) => {
  return (
    <Col className="header-container">
      <Col className="left">{left}</Col>
      <Col className="right">{right}</Col>
    </Col>
  );
};

export default React.memo(HeaderContainer);
