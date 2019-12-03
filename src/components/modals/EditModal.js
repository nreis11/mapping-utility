import React from "react";

import { Modal, Button, Alert } from "react-bootstrap";
import { FaPlus, FaUpload } from "react-icons/fa";

import AddModal from "./AddModal";
import FileInput from "../misc/FileInput";
import { importYaml } from "../../utils/fileHelpers";
import { func, string } from "prop-types";

class EditModal extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFileOnClick = this.handleFileOnClick.bind(this);
    this.handleYamlImport = this.handleYamlImport.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      show: false,
      error: null
    };
  }

  handleClose() {
    this.setState({ show: false, error: null });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleFileOnClick() {
    // Prompt user for file. Simulate click. Keeping ugly default button hidden
    let fileInput = document.getElementById("file-input-yaml");
    fileInput.click();
  }

  handleYamlImport(yamlFile) {
    const { treeKey, onChange } = this.props.children.props;
    importYaml({ yamlFile, treeKey, onChange, handleError: this.handleError });
  }

  handleError(error) {
    this.setState({
      error: error
    });
  }

  render() {
    const { onClear, activeType } = this.props;
    const { onAddNodes } = this.props.children.props;

    return (
      <React.Fragment>
        <Button id="edit-modal-btn" variant="info" onClick={this.handleShow}>
          <FaPlus className="react-icons" /> Add/Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add/Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "65vh" }}>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <FileInput
              handleOpen={this.handleYamlImport}
              handleAlert={this.handleError}
              type="yaml"
            />
            <AddModal onAddNodes={onAddNodes} />
            <Button
              className="pull-left"
              style={{ marginLeft: 5 }}
              variant="success"
              onClick={this.handleFileOnClick}
            >
              <FaUpload className="react-icons" />
              &nbsp;Import YAML
            </Button>

            <Button
              className="pull-left"
              style={{ marginLeft: 5, textTransform: "capitalize" }}
              variant="danger"
              onClick={() => onClear(false)}
            >
              Clear {activeType}
            </Button>

            <Button
              className="pull-left"
              style={{ marginLeft: 5 }}
              variant="danger"
              onClick={() => onClear(true)}
            >
              Clear All
            </Button>
            {this.state.error && (
              <Alert
                className="pull-left"
                variant="danger"
                style={{
                  fontSize: 12,
                  height: 30
                }}
              >
                {this.state.error}
              </Alert>
            )}

            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

EditModal.propTypes = {
  onClear: func.isRequired,
  activeType: string.isRequired
};

export default EditModal;
