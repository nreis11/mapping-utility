import React from "react";
import { Col } from "react-bootstrap";

import { number } from "prop-types";

const HeaderSmallContainer = props => {
  return (
    <Col md={5} mdOffset={props.mdOffset}>
      {props.children}
    </Col>
  );
};

HeaderSmallContainer.propTypes = {
  mdOffset: number
};

HeaderSmallContainer.defaultProps = {
  mdOffset: 0
};

export default HeaderSmallContainer;
