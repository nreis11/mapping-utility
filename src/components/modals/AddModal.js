import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { func, shape, arrayOf, string, bool } from "prop-types";
import AddNodesForm from "./forms/AddNodesForm";

class AddModal extends React.PureComponent {
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
    this.props.onHide();
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { onAddNodes, nodeInfo } = this.props;

    return (
      <React.Fragment>
        {/* Main Add Button */}
        {!nodeInfo && (
          <Button variant="info" size="sm" onClick={this.handleShow}>
            <FaPlus />
            &nbsp;Add Data
          </Button>
        )}
        <Modal
          show={this.props.show || this.state.show}
          onHide={this.handleClose}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNodesForm
              onAddNodes={onAddNodes}
              handleClose={this.handleClose}
              nodeInfo={nodeInfo}
            />
          </Modal.Body>
        </Modal>
      </React.Fragment>
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
