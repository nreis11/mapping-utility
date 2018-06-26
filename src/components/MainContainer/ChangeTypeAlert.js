import React from "react";
import { Modal, Button } from "react-bootstrap";

const ChangeTypeAlert = props => {
  const { handleCancel } = props;
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Mappings detected. Are you sure you want to change type and lose your
          changes?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button bsStyle="danger">Change Type</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ChangeTypeAlert;
