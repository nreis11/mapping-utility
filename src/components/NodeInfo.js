import React from "react";
import "./NodeInfo.css";
import { string, number, shape } from "prop-types";

import { Col, Panel } from "react-bootstrap";

const NodeInfo = props => {
  const { mdOffset, heading, node } = props;

  const panelHeadingStyle = {
    padding: "2px"
  };

  return (
    <Col md={5} mdOffset={mdOffset}>
      <Panel bsStyle="info" style={{ marginBottom: "0", marginTop: "0" }}>
        <Panel.Heading style={panelHeadingStyle}>
          <Panel.Title componentClass="h3">{heading}</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={{ padding: "8px", height: "4vh" }}>
          <div className="info pull-left">
            <span>
              <strong>{node ? node.title : null}</strong>
            </span>
          </div>
          <div className="info pull-right">
            <span>
              <strong>{node ? node.id : null}</strong>
            </span>
          </div>
          <div className="clearfix" />
        </Panel.Body>
      </Panel>
    </Col>
  );
};

NodeInfo.default = {
  mdOffset: 0,
  node: {}
};

NodeInfo.propTypes = {
  mdOffset: number,
  heading: string.isRequired,
  node: shape({})
};

export default NodeInfo;
