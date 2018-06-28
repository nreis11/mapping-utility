import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { func } from "prop-types";

class ExportModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      output: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    const output = this.props.handleExport();
    this.setState({
      output
    });
  }

  render() {
    const { output } = this.state;

    return (
      <Col className="pull-right" style={{ display: "inline-block" }}>
        <Button onClick={this.handleShow} bsStyle="success" bsSize="small">
          Export
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Export</Modal.Title>
          </Modal.Header>
          <Modal.Body>{output}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

ExportModal.propTypes = {
  handleExport: func.isRequired
};

export default ExportModal;
