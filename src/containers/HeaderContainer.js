import React from "react";
import { Col } from "react-bootstrap";

import { number } from "prop-types";

const HeaderContainer = React.memo(props => {
  return (
    <Col md={5} mdOffset={props.mdOffset}>
      {props.children}
    </Col>
  );
});

HeaderContainer.propTypes = {
  mdOffset: number
};

HeaderContainer.defaultProps = {
  mdOffset: 0
};

export default HeaderContainer;
