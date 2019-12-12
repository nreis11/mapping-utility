import React from "react";

import { Modal, Button, Alert, Col } from "react-bootstrap";
import { FaPlus, FaUpload } from "react-icons/fa";

import AddModal from "./AddModal";
import FileInput from "../misc/FileInput";
import { importYaml } from "../../utils/fileHelpers";
import { func, string } from "prop-types";
import "./EditModal.css";

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
        <Button
          id="edit-modal-btn"
          variant="info"
          size="sm"
          onClick={this.handleShow}
        >
          <FaPlus /> Add/Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              Edit{" "}
              {this.state.error && (
                <Alert
                  id="yaml-error"
                  variant="danger"
                  onClose={() => this.handleError(null)}
                  dismissible
                >
                  <p>{this.state.error}</p>
                </Alert>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.children}</Modal.Body>
          <Modal.Footer>
            <Col md={8} className="left">
              <AddModal onAddNodes={onAddNodes} />
              <Button
                variant="success"
                onClick={this.handleFileOnClick}
                size="sm"
              >
                <FaUpload />
                &nbsp;Import YAML
              </Button>

              <Button
                style={{ textTransform: "capitalize" }}
                variant="danger"
                onClick={() => onClear(false)}
                size="sm"
              >
                Clear {activeType}
              </Button>

              <Button variant="danger" size="sm" onClick={() => onClear(true)}>
                Clear All
              </Button>
              <FileInput
                handleOpen={this.handleYamlImport}
                handleAlert={this.handleError}
                type="yaml"
              />
            </Col>
            <Col className="right">
              <Button size="sm" onClick={this.handleClose}>
                Close
              </Button>
            </Col>
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
