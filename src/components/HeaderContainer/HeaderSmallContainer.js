import React from "react";
import { Col } from "react-bootstrap";

import { string, number } from "prop-types";

const HeaderSmallContainer = props => {
  return (
    <Col md={5} mdOffset={props.mdOffset} className={props.className}>
      {props.children}
    </Col>
  );
};

HeaderSmallContainer.propTypes = {
  mdOffset: number,
  className: string
};

HeaderSmallContainer.defaultProps = {
  mdOffset: 0,
  className: ""
};

export default HeaderSmallContainer;
