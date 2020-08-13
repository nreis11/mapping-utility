import React from "react";
import { Col, Modal, Button, OverlayTrigger } from "react-bootstrap";
import tooltip from "../misc/Tooltip";
import guide from "../../assets/user_guide.pdf";
import { FaQuestion, FaDownload } from "react-icons/fa";
import "./HelpModal.css";

class HelpModal extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

    this.state = {
      show: false,
    };
    this.version = "2.0.1";
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleDownload() {
    let element = document.createElement("a");
    element.setAttribute("href", guide);
    element.setAttribute("target", "_blank");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render() {
    return (
      <Col>
        <Col id="help-link" onClick={this.handleShow}>
          <OverlayTrigger placement="bottom" overlay={tooltip("Help")}>
            <FaQuestion size="1.25em" />
          </OverlayTrigger>
        </Col>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Up, Down, Left, Right:</strong>
              <br />
              Navigate nodes.
            </p>

            <p>
              <strong>Space:</strong>
              <br />
              Map single node
            </p>

            <p>
              <strong>Shift+Space:</strong>
              <br />
              Map node and its children. Preserve existing mappings.
            </p>

            <p>
              <strong>Ctrl+Space:</strong>
              <br />
              Map node and its children. Overwrite any existing mappings.
            </p>

            <p>
              <strong>Backspace:</strong>
              <br />
              Delete current node mapping.
            </p>

            <p>
              <strong>Shift+Backspace:</strong>
              <br />
              Delete current node &amp; everything under that node.
            </p>

            <p>
              <strong>Ctrl+F:</strong>
              <br />
              Search Board tree.
            </p>

            <p>
              <strong>Ctrl+G:</strong>
              <br />
              Search eQuest tree.
            </p>

            <p>
              <strong>Esc (when search field is in focus):</strong>
              <br />
              Allow keyboard mapping (Space, Shift+Space, etc...) commands.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Col className="left">
              <Button title="Download" onClick={this.handleDownload}>
                <span>
                  <FaDownload />
                  &nbsp;User Guide
                </span>
              </Button>
            </Col>
            <Col id="help-footer-right" className="right">
              <span id="version-txt">{`v${this.version}`}</span>
              <Button onClick={this.handleClose}>Close</Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default HelpModal;
