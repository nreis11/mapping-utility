import React from "react";
import { Modal, Button } from "react-bootstrap";
import { func, string } from "prop-types";

const BasicAlert = props => {
  const { handleClose, message } = props;
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>
          <strong>{message}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(null)}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

BasicAlert.propTypes = {
  handleClose: func.isRequired,
  message: string.isRequired
};

export default BasicAlert;
