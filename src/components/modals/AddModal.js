import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import PlusSign from "react-icons/lib/fa/plus";
import AddNodesForm from "./AddNodesForm";

class AddModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleImport() {
    console.log("HANDLING IMPORT");
  }

  render() {
    const { handleAddNodesToExtTree } = this.props;

    return (
      <Col>
        <Button
          className="pull-left"
          bsStyle="info"
          bsSize="small"
          onClick={this.handleShow}
        >
          <PlusSign /> Add Nodes
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Add Nodes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNodesForm handleAddNodesToExtTree={handleAddNodesToExtTree} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button bsStyle="info" onClick={this.handleImport}>
              Import Nodes
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}
export default AddModal;
