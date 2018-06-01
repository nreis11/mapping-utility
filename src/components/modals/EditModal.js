import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import PlusSign from "react-icons/lib/fa/plus";

import TreeContainer from "../../containers/TreeContainer";
import AddModal from "./AddModal";

class EditModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);

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

  handleClearAll() {
    const { treeKey, onChange } = this.props;
    onChange([], treeKey);
  }

  render() {
    const {
      treeKey,
      treeData,
      onChange,
      handleAddNodesToExtTree,
      handleRemoveNode
    } = this.props;

    return (
      <Col>
        <Button bsStyle="info" bsSize="small" onClick={this.handleShow}>
          <PlusSign /> Add/Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Add/Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TreeContainer
              treeKey={treeKey}
              treeData={treeData}
              onChange={onChange}
              editMode={true}
              handleClose={this.handleClose}
              handleAddNodesToExtTree={handleAddNodesToExtTree}
              handleRemoveNode={handleRemoveNode}
            />
          </Modal.Body>
          <Modal.Footer>
            <AddModal handleAddNodesToExtTree={handleAddNodesToExtTree} />
            <Button
              className="pull-left"
              bsStyle="danger"
              bsSize="small"
              onClick={this.handleClearAll}
            >
              Clear All
            </Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}
export default EditModal;
