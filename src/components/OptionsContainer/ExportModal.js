import React from "react";
import { Modal, Button } from "react-bootstrap";
import { func, string } from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaDownload } from "react-icons/fa";
import CopyConfirmation from "./CopyConfirmation";
import FileSaver from "file-saver";

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
    const { boardName } = this.props;
    let file = new Blob([this.state.output], { type: "application/xml" });
    const fileName = `${boardName}.xml`;
    FileSaver.saveAs(file, fileName);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          id="export-btn"
          onClick={this.handleShow}
          bsStyle="success"
          bsSize="small"
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
                <FaDownload className="react-icons" />
                &nbsp;Download
              </span>
            </Button>
            <CopyToClipboard
              text={this.state.output}
              className="pull-left"
              onCopy={() => this.setState({ copied: true })}
            >
              <Button title="Copy">
                <FaCopy className="react-icons" />
                &nbsp;Copy
              </Button>
            </CopyToClipboard>
            {this.state.copied && <CopyConfirmation />}

            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

ExportModal.propTypes = {
  handleExport: func.isRequired,
  boardName: string.isRequired
};

export default ExportModal;
