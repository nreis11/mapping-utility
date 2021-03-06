import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { func, string, object } from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaDownload } from "react-icons/fa";
import CopyConfirmation from "./CopyConfirmation";
import FileSaver from "file-saver";
import { OverlayTrigger } from "react-bootstrap";
import tooltip from "../misc/Tooltip";

import "./ExportModal.css";

class ExportModal extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

    this.state = {
      show: false,
      output: "",
      copied: false,
    };
  }

  handleClose() {
    this.setState({ show: false, copied: false });
  }

  handleShow() {
    const output = this.props.handleExport();
    this.setState({
      show: true,
      output,
    });
  }

  handleDownload() {
    const { boardName } = this.props;
    let file = new Blob([this.state.output], { type: "application/xml" });
    const fileName = `${boardName}.xml`;
    FileSaver.saveAs(file, fileName);
  }

  render() {
    const { outputLabels } = this.props.options;

    return (
      <React.Fragment>
        <OverlayTrigger placement="top" overlay={tooltip("Export to XML")}>
          <Button id="export-btn" onClick={this.handleShow} variant="success">
            <strong>Export</strong>
          </Button>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Export</Modal.Title>
          </Modal.Header>
          <Modal.Body id="export-modal-body">
            <p className="pretty-print">{this.state.output}</p>
          </Modal.Body>
          <Modal.Footer>
            <Col className="left">
              <Button
                id="download-btn"
                title="Download"
                variant="outline-dark"
                onClick={this.handleDownload}
              >
                <span>
                  <FaDownload />
                  &nbsp;Download
                </span>
              </Button>
              <CopyToClipboard
                text={this.state.output}
                onCopy={() => this.setState({ copied: true })}
                // She can't take it captain if everything is exported
                disabled={outputLabels}
              >
                <Button id="copy-btn" title="Copy" variant="outline-dark">
                  <FaCopy />
                  &nbsp;Copy
                </Button>
              </CopyToClipboard>
              {this.state.copied && <CopyConfirmation />}
            </Col>
            <Col className="right">
              <Button onClick={this.handleClose}>Close</Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

ExportModal.propTypes = {
  handleExport: func.isRequired,
  boardName: string.isRequired,
  options: object.isRequired,
};

export default ExportModal;
