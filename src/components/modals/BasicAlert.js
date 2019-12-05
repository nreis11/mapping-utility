import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { func, string } from "prop-types";

const BasicAlert = props => {
  const { handleClose, message } = props;
  return (
    <Modal show={true} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "red" }}>
        <strong>{message}</strong>
      </Modal.Body>
      <Modal.Footer>
        <Col className="right">
          <Button onClick={() => handleClose(null)}>Close</Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

BasicAlert.propTypes = {
  handleClose: func.isRequired,
  message: string.isRequired
};

export default BasicAlert;
