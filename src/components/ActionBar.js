import React from "react";
import { Col, Button, ButtonGroup } from "react-bootstrap";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

const ActionBar = props => {
  const buttonGroupStyle = {
    marginBottom: "15%"
  };

  const { expandOnClick, intKeyName, extKeyName } = props;

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
        <Button bsStyle="primary" block>
          Highlight Missing Maps
        </Button>
        <Button bsStyle="primary" block>
          <FaBackward /> Clear This Map
        </Button>
        <Button bsStyle="primary" block>
          <FaBackward /> Clear Entire Node
        </Button>
      </ButtonGroup>
      <ButtonGroup style={buttonGroupStyle}>
        <Button
          bsStyle="primary"
          onClick={() => expandOnClick(true, intKeyName)}
        >
          <FaBackward />
        </Button>
        <Button disabled>Expand All</Button>
        <Button
          bsStyle="primary"
          onClick={() => expandOnClick(true, extKeyName)}
        >
          <FaForward />
        </Button>
      </ButtonGroup>
      <ButtonGroup style={buttonGroupStyle}>
        <Button
          bsStyle="primary"
          onClick={() => expandOnClick(false, intKeyName)}
        >
          <FaBackward />
        </Button>
        <Button disabled>Collapse All</Button>
        <Button
          bsStyle="primary"
          onClick={() => expandOnClick(false, extKeyName)}
        >
          <FaForward />
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default ActionBar;
