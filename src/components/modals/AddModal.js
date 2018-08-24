import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { func, shape, arrayOf, string, bool } from "prop-types";
import AddNodesForm from "./forms/AddNodesForm";

class AddModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: props.show || false
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.props.onHide();
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { onAddNodes, nodeInfo } = this.props;

    return (
      <Col>
        {!nodeInfo && (
          <Button
            className="pull-left"
            bsStyle="info"
            bsSize="small"
            onClick={this.handleShow}
          >
            <FaPlus className="react-icons" /> Add Nodes
          </Button>
        )}
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
  }),
  onHide: func,
  show: bool
};

AddModal.defaultProps = {
  nodeInfo: null,
  show: false,
  onHide: () => {}
};
