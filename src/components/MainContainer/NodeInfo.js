import React from "react";
import { string, number, shape } from "prop-types";

import { Col, Panel } from "react-bootstrap";

const NodeInfo = ({ mdOffset, heading, node }) => {
  const nodeTitle = node ? node.title : null;
  const nodeKey = node ? node.id : null;

  return (
    <Col md={5} mdOffset={mdOffset}>
      <Panel bsStyle="info" style={{ marginBottom: 10, marginTop: 0 }}>
        <Panel.Heading style={{ padding: "2px" }}>
          <Panel.Title componentClass="h3">{heading}</Panel.Title>
        </Panel.Heading>
        <Panel.Body style={{ padding: "8px", height: "30px" }}>
          <div className="info pull-left">
            <span>
              <strong>{nodeTitle}</strong>
            </span>
          </div>
          <div className="info pull-right">
            <span>
              <strong>{nodeKey}</strong>
            </span>
          </div>
          <div className="clearfix" />
        </Panel.Body>
      </Panel>
    </Col>
  );
};

NodeInfo.defaultProps = {
  mdOffset: 0,
  node: null
};

NodeInfo.propTypes = {
  mdOffset: number,
  heading: string.isRequired,
  node: shape({})
};

export default NodeInfo;
