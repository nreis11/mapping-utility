import React, { Component } from "react";
import { func, string } from "prop-types";

import { Col, Button, ButtonGroup } from "react-bootstrap";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Sending to handleKeyDown on MainContainer to map commands
    this.props.onClick(e);
  }

  render() {
    const { expandAll, intKey, extKey, onhighlightUnmapped } = this.props;

    const buttonGroupStyle = {
      marginBottom: "15%"
    };

    return (
      <Col md={2} className="text-center">
        <ButtonGroup style={buttonGroupStyle}>
          <Button
            bsStyle="primary"
            data-cmd={"space"}
            onClick={this.handleClick}
            block
          >
            <FaForward /> Map <FaForward />
            <br />
            (single)
          </Button>
          <Button
            bsStyle="primary"
            data-cmd={"shift-space"}
            onClick={this.handleClick}
            block
          >
            <FaForward /> Map Node <FaForward />
            <br />
            (preserve)
          </Button>
          <Button
            bsStyle="primary"
            data-cmd={"ctrl-space"}
            onClick={this.handleClick}
            block
          >
            <FaForward /> Map Node <FaForward />
            <br />
            (overwrite)
          </Button>
        </ButtonGroup>
        <ButtonGroup style={buttonGroupStyle}>
          <Button bsStyle="primary" onClick={onhighlightUnmapped} block>
            Highlight Unmapped
          </Button>
          <Button
            bsStyle="primary"
            data-cmd={"delete"}
            onClick={this.handleClick}
            block
          >
            <FaBackward /> Clear This Map
          </Button>
          <Button
            bsStyle="primary"
            data-cmd={"shift-delete"}
            onClick={this.handleClick}
            block
          >
            <FaBackward /> Clear Entire Node
          </Button>
        </ButtonGroup>
        <ButtonGroup style={buttonGroupStyle}>
          <Button bsStyle="primary" onClick={() => expandAll(true, intKey)}>
            <FaBackward />
          </Button>
          <Button disabled>Expand All</Button>
          <Button bsStyle="primary" onClick={() => expandAll(true, extKey)}>
            <FaForward />
          </Button>
        </ButtonGroup>
        <ButtonGroup style={buttonGroupStyle}>
          <Button bsStyle="primary" onClick={() => expandAll(false, intKey)}>
            <FaBackward />
          </Button>
          <Button disabled>Collapse All</Button>
          <Button bsStyle="primary" onClick={() => expandAll(false, extKey)}>
            <FaForward />
          </Button>
        </ButtonGroup>
      </Col>
    );
  }
}

ActionBar.propTypes = {
  expandAll: func,
  intKeyName: string,
  extKeyName: string
};

export default ActionBar;
