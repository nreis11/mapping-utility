import React from "react";
import { Row } from "react-bootstrap";

const NavBarContainer = props => (
  <Row className="show-grid">{props.children}</Row>
);

export default NavBarContainer;
