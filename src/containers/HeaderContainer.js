import React from "react";
import { Row } from "react-bootstrap";
import "./HeaderContainer.css";

const HeaderContainer = props => (
  <Row className="show-grid">{props.children}</Row>
);

export default HeaderContainer;
