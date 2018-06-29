import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { func } from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyIcon from "react-icons/lib/fa/copy";

import "./ExportModal.css";

class ExportModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCopy = this.handleCopy.bind(this);

    this.state = {
      show: false,
      output: "",
      copied: false
    };
  }

  handleClose() {
    this.setState({ show: false, copied: false });
  }

  handleShow() {
    this.setState({ show: true });
    const output = this.props.handleExport();
    this.setState({
      output
    });
  }

  handleCopy() {}

  render() {
    return (
      <Col>
        <Button
          className="pull-right"
          onClick={this.handleShow}
          bsStyle="success"
          bsSize="small"
        >
          Export
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Export</Modal.Title>
          </Modal.Header>
          <Modal.Body id="export-modal-body">
            <p className="pretty-print">{this.state.output}</p>
          </Modal.Body>
          <Modal.Footer>
            <CopyToClipboard
              text={this.state.output}
              className="pull-left"
              onCopy={() => this.setState({ copied: true })}
            >
              <Button>
                <CopyIcon />
              </Button>
            </CopyToClipboard>
            {this.state.copied ? (
              <p
                className="pull-left"
                style={{ paddingLeft: "5px", lineHeight: "34px" }}
              >
                Copied.
              </p>
            ) : null}

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
