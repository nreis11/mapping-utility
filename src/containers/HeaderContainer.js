import React from "react";
import { Row } from "react-bootstrap";

const HeaderContainer = props => (
  <Row className="show-grid">{props.children}</Row>
);

export default HeaderContainer;
