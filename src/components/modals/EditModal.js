import React from "react";

import { Modal, Col, Button, Alert } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";

import AddModal from "./AddModal";
import FileInput from "../misc/FileInput";
import { importYaml } from "../../utilities/fileHelpers";

class EditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleFileOnClick = this.handleFileOnClick.bind(this);
    this.handleYamlImport = this.handleYamlImport.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      show: false,
      error: null
    };
  }

  handleClose() {
    this.setState({ show: false });
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

  handleClearAll() {
    const { treeKey, onChange } = this.props.children.props;
    onChange([], treeKey);
  }

  render() {
    const { onAddNodes } = this.props.children.props;

    return (
      <Col>
        <Button
          bsStyle="info"
          bsSize="small"
          onClick={this.handleShow}
          className={"pull-right"}
        >
          <FaPlus className="react-icons" /> Add/Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Add/Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "70vh" }}>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <FileInput handleOpen={this.handleYamlImport} type="yaml" />
            <AddModal onAddNodes={onAddNodes} />
            <Button
              className="pull-left"
              style={{ marginLeft: 5 }}
              bsStyle="success"
              bsSize="small"
              onClick={this.handleFileOnClick}
            >
              <FaUpload className="react-icons" /> Import YAML
            </Button>

            <Button
              className="pull-left"
              style={{ marginLeft: 5 }}
              bsStyle="danger"
              bsSize="small"
              onClick={this.handleClearAll}
            >
              Clear All
            </Button>
            {this.state.error && (
              <Alert
                className="pull-left"
                bsStyle="danger"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 5,
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
      </Col>
    );
  }
}
export default EditModal;
