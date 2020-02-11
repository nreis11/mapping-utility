import React from "react";
import { string, shape, bool } from "prop-types";
import "./NodeInfo.css";
import { Row, Col, Card } from "react-bootstrap";
import { DELIMITER } from "../../utils/mappingHelpers";

const NodeInfo = ({ heading, node }) => {
  const nodeTitle = node ? node.title : null;
  let nodeKey = node ? node.id : null;

  // Remove tier prefix
  if (nodeKey && !node.isInternal) {
    const keyArr = nodeKey.split(DELIMITER);
    nodeKey = keyArr[keyArr.length - 1];
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title as="p">{heading}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={8}>
            <span>
              <strong>{nodeTitle}</strong>
            </span>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <span>
              <strong>{nodeKey}</strong>
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

NodeInfo.defaultProps = {
  node: null
};

NodeInfo.propTypes = {
  heading: string.isRequired,
  node: shape({
    id: string.isRequired,
    title: string.isRequired,
    isInternal: bool.isRequired
  })
};

export default React.memo(NodeInfo);
