import React from "react";
import { Card } from "react-bootstrap";

const OptionsContainer = props => {
  return (
    <Card variant="info">
      <Card.Header>
        <Card.Title as="h3">Options</Card.Title>
      </Card.Header>
      <Card.Body>
        <span className="pull-left">
          <strong>{props.left}</strong>
        </span>
        <span className="pull-right">{props.right}</span>
      </Card.Body>
    </Card>
  );
};

export default React.memo(OptionsContainer);
