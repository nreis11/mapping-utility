import React from "react";
import { Col } from "react-bootstrap";

import TypeSelector from "./TypeSelector";
import Header from "./Header";

const HeaderInt = props => {
  const { internalName, handleTypeSelect } = props;
  return (
    <Col md={5}>
      <Header name={internalName} />
      <TypeSelector onSelect={handleTypeSelect} />
    </Col>
  );
};

export default HeaderInt;
