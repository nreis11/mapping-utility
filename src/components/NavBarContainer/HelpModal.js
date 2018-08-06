import React from "react";
import { Modal, Button } from "react-bootstrap";

import QuestionMark from "react-icons/lib/fa/question";

class HelpModal extends React.Component {
  constructor(props, context) {
    super(props, context);

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

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleShow}>
          <QuestionMark />
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Up, Down, Left, Right:</strong>
              <br />
              Move through nodes.
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
              <strong>Delete:</strong>
              <br />
              Delete current node mapping and move down to the next node.
            </p>

            <p>
              <strong>Shift+Delete:</strong>
              <br />
              Delete current node &amp; everything under that node, then move
              down to the next node.
            </p>

            <p>
              <strong>Backspace:</strong>
              <br />
              Delete current node mapping and move up to the previous node.
            </p>

            <p>
              <strong>Shift+Backspace:</strong>
              <br />
              Delete current node &amp; everything under that node, then move up
              to the previous node.
            </p>

            <p>
              <strong>Ctrl+G:</strong>
              <br />
              Search eQuest tree.
            </p>

            <p>
              <strong>Ctrl+F:</strong>
              <br />
              Search Board tree.
            </p>

            <p>
              <strong>Esc (when search field is in focus):</strong>
              <br />
              Allow keyboard mapping (Space, Shift+Space, etc...) commands.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default HelpModal;
