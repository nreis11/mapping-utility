import React from "react";
import { string, shape } from "prop-types";
import "./NodeInfo.css";
import { Col, Panel } from "react-bootstrap";
import { delimiter } from "../../utilities/mappingHelpers";

const NodeInfo = ({ heading, node }) => {
  const nodeTitle = node ? node.title : null;
  let nodeKey = node ? node.id : null;

  // Remove eq prefix on equest values
  if (heading === "eQuest" && nodeKey) {
    nodeKey = nodeKey.slice(2);
  }

  // Remove parent prefix
  if (heading !== "eQuest" && nodeKey) {
    const keyArr = nodeKey.split(delimiter);
    nodeKey = keyArr[keyArr.length - 1];
  }

  return (
    <Col>
      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{heading}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="pull-left">
            <span>
              <strong>{nodeTitle}</strong>
            </span>
          </div>
          <div className="pull-right">
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
  node: null
};

NodeInfo.propTypes = {
  heading: string.isRequired,
  node: shape({ id: string.isRequired, title: string.isRequired })
};

export default React.memo(NodeInfo);
