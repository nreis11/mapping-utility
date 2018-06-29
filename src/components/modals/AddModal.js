import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import PlusSign from "react-icons/lib/fa/plus";
import { func, shape } from "prop-types";
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

  renderButton(nodeInfo) {
    // Render mini button on node or edit modal button
    return nodeInfo ? (
      <button onClick={this.handleShow}>
        <PlusSign />
      </button>
    ) : (
      <Button
        className="pull-left"
        bsStyle="info"
        bsSize="small"
        onClick={this.handleShow}
      >
        <PlusSign /> Add Nodes
      </Button>
    );
  }

  render() {
    const { onAddNodes, nodeInfo } = this.props;
    const addButton = this.renderButton(nodeInfo);

    return (
      <Col>
        {addButton}
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Add Nodes</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "70vh" }}>
            <AddNodesForm
              onAddNodes={onAddNodes}
              handleClose={this.handleClose}
              nodeInfo={nodeInfo}
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

AddModal.propTypes = {
  onAddNodes: func.isRequired,
  nodeInfo: shape({})
};

AddModal.defaultProps = {
  nodeInfo: null
};
