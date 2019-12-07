import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./OptionsContainer.css";

const OptionsContainer = props => {
  return (
    <Card id="options-container" variant="info">
      <Card.Header>
        <Card.Title as="p">Options</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row className="d-flex align-items-center" noGutters>
          <Col md={10}>{props.left}</Col>
          <Col className="d-flex justify-content-end" md={2}>
            {props.right}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default React.memo(OptionsContainer);
