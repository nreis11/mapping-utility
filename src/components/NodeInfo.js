import React from "react";
import "./NodeInfo.css";
import PropTypes from "prop-types";

import { Col, Panel } from "react-bootstrap";

const NodeInfo = props => {
  const { mdOffsetSize, heading, node } = props;

  const panelHeadingStyle = {
    padding: "2px"
  };

  return (
    <Col md={5} mdOffset={mdOffsetSize}>
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
  mdOffset: 0
};

NodeInfo.propTypes = {
  mdSize: PropTypes.number,
  mdOffset: PropTypes.number,
  heading: PropTypes.string
};

export default NodeInfo;
