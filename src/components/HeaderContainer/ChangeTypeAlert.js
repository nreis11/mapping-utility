import React from "react";
import { Modal, Button } from "react-bootstrap";

import { func } from "prop-types";

const ChangeTypeAlert = props => {
  const { handleCancel, handleConfirm } = props;
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Mappings detected. Are you sure you want to change type? Any unsaved
          changes will be lost.
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => handleConfirm()} bsStyle="danger">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

ChangeTypeAlert.propTypes = {
  handleCancel: func.isRequired,
  handleConfirm: func.isRequired
};

export default ChangeTypeAlert;
