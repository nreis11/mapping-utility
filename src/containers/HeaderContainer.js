import React from "react";
import { Col } from "react-bootstrap";
import "./HeaderContainer.css";

const HeaderContainer = ({ left, right }) => {
  return (
    <Col className="header-container">
      <Col md={9} className="left">
        {left}
      </Col>
      <Col md={3} className="right">
        {right}
      </Col>
    </Col>
  );
};

export default React.memo(HeaderContainer);
