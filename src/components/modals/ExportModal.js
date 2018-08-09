import React from "react";
import { Modal, Button } from "react-bootstrap";
import { func } from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

import "./ExportModal.css";

class ExportModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

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
    const output = this.props.handleExport();
    this.setState({
      show: true,
      output
    });
  }

  handleDownload() {
    let link = document.createElement("a");
    let file = new Blob([this.state.output], { type: "application/xml" });
    link.href = URL.createObjectURL(file);
    link.download = "mapping.xml";
    link.click();
  }

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.handleShow}
          bsStyle="success"
          bsSize="small"
          style={{ lineHeight: "12px" }}
        >
          <strong>Export</strong>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Export</Modal.Title>
          </Modal.Header>
          <Modal.Body id="export-modal-body">
            <p className="pretty-print">{this.state.output}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              title="Download"
              onClick={this.handleDownload}
              className="pull-left"
            >
              <span>
                <FaDownload className="react-icons" /> Download
              </span>
            </Button>
            <CopyToClipboard
              text={this.state.output}
              className="pull-left"
              onCopy={() => this.setState({ copied: true })}
            >
              <Button title="Copy">
                <FaCopy className="react-icons" /> Copy
              </Button>
            </CopyToClipboard>
            {this.state.copied && (
              <span
                className="pull-left"
                style={{ paddingLeft: "5px", lineHeight: "34px" }}
              >
                Copied.
              </span>
            )}

            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

ExportModal.propTypes = {
  handleExport: func.isRequired
};

export default ExportModal;
