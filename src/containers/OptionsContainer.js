import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./OptionsContainer.css";

const OptionsContainer = props => {
  return (
    <Card id="options-container">
      <Card.Header>
        <Card.Title as="p">Options</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row noGutters>
          <Col md={10}>{props.left}</Col>
          <Col className="right">{props.right}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default React.memo(OptionsContainer);
