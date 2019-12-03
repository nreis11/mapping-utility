import React from "react";
import { string, shape } from "prop-types";
import "./NodeInfo.css";
import { Card } from "react-bootstrap";
import { DELIMITER } from "../../utils/mappingHelpers";

const NodeInfo = ({ heading, node }) => {
  const nodeTitle = node ? node.title : null;
  let nodeKey = node ? node.id : null;

  // Remove tier prefix
  if (heading !== "eQuest" && nodeKey) {
    const keyArr = nodeKey.split(DELIMITER);
    nodeKey = keyArr[keyArr.length - 1];
  }

  return (
    <Card variant="info">
      <Card.Header>
        <Card.Title as="h3">{heading}</Card.Title>
      </Card.Header>
      <Card.Body>
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
      </Card.Body>
    </Card>
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
