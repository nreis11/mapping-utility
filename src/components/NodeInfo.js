import React from "react";
import "./NodeInfo.css";
import PropTypes from "prop-types";

import { Col, Panel } from "react-bootstrap";

const NodeInfo = props => {
  const panelHeadingStyle = {
    padding: "2px"
  };

  return (
    <Col md={props.mdSize} mdOffset={props.mdOffsetSize}>
      <Panel bsStyle="info" style={{ marginBottom: "0", marginTop: "0" }}>
        <Panel.Heading style={panelHeadingStyle}>
          <Panel.Title componentClass="h3">{props.heading}</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={{ padding: "8px" }}>
          <div className="info pull-left">
            <span>
              <strong>Label</strong>
            </span>
          </div>
          <div className="info pull-right">
            <span>
              <strong>Value</strong>
            </span>
          </div>
          <div className="clearfix" />
        </Panel.Body>
      </Panel>
    </Col>
  );
};

NodeInfo.defaultProps = {
  mdSize: 5,
  mdOffset: 0
};

NodeInfo.propTypes = {
  mdSize: PropTypes.number,
  mdOffset: PropTypes.number,
  heading: PropTypes.string
};

export default NodeInfo;
