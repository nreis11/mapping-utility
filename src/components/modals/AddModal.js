import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import PlusSign from "react-icons/lib/fa/plus";
import AddNodesForm from "./forms/AddNodesForm";

class AddModal extends React.Component {
  constructor(props) {
    super(props);

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
            <AddNodesForm
              handleAddNodesToExtTree={handleAddNodesToExtTree}
              onClose={this.handleClose}
            />
            <Button className="pull-right" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </Col>
    );
  }
}
export default AddModal;
