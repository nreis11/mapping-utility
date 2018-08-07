import React from "react";
import { Col, Panel } from "react-bootstrap";

const OptionsContainer = props => {
  return (
    <Col md={5} mdOffset={2}>
      <Panel bsStyle="info" style={{ marginBottom: 10, marginTop: 0 }}>
        <Panel.Heading style={{ padding: 2 }}>
          <Panel.Title componentClass="h3">Options</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={{ padding: "3px 8px", height: 32 }}>
          <span className="pull-left">
            <strong>{props.left}</strong>
          </span>
          <span className="pull-right">{props.right}</span>
          <div className="clearfix" />
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default OptionsContainer;
