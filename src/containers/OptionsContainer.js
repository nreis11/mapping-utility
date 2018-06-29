import React from "react";
import { Col, Panel } from "react-bootstrap";

const OptionsContainer = props => {
  return (
    <Col md={5} mdOffset={2}>
      <Panel bsStyle="info" style={{ marginBottom: 10, marginTop: 0 }}>
        <Panel.Heading style={{ padding: 2 }}>
          <Panel.Title componentClass="h3">Options</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={{ padding: "8px", height: "40px" }}>
          <div className="info">
            <span>
              <strong>{props.children}</strong>
            </span>
          </div>
          <div className="clearfix" />
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default OptionsContainer;
