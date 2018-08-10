import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { func, shape, arrayOf, string } from "prop-types";
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
        <FaPlus className="react-icons" />
      </button>
    ) : (
      <Button
        className="pull-left"
        bsStyle="info"
        bsSize="small"
        onClick={this.handleShow}
      >
        <FaPlus className="react-icons" /> Add Nodes
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
  nodeInfo: shape({
    node: shape({ id: string.isRequired, title: string.isRequired }),
    path: arrayOf(string).isRequired
  })
};

AddModal.defaultProps = {
  nodeInfo: null
};
