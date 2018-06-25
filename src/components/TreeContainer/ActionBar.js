import React from "react";
import { func, string } from "prop-types";

import { Col, Button, ButtonGroup } from "react-bootstrap";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

const ActionBar = props => {
  const buttonGroupStyle = {
    marginBottom: "15%"
  };

  const { expandAll, intKey, extKey, onhighlightUnmapped } = props;

  return (
    <Col md={2} className="text-center">
      <ButtonGroup style={buttonGroupStyle}>
        <Button bsStyle="primary" block>
          <FaForward /> Map <FaForward />
          <br />
          (single)
        </Button>
        <Button bsStyle="primary" block>
          <FaForward /> Map Node <FaForward />
          <br />
          (preserve)
        </Button>
        <Button bsStyle="primary" block>
          <FaForward /> Map Node <FaForward />
          <br />
          (overwrite)
        </Button>
      </ButtonGroup>
      <ButtonGroup style={buttonGroupStyle}>
        <Button bsStyle="primary" onClick={onhighlightUnmapped} block>
          Highlight Unmapped
        </Button>
        <Button bsStyle="primary" block>
          <FaBackward /> Clear This Map
        </Button>
        <Button bsStyle="primary" block>
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
};

ActionBar.propTypes = {
  expandAll: func,
  intKeyName: string,
  extKeyName: string
};

export default ActionBar;
