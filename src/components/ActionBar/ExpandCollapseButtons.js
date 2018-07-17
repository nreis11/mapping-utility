import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

export const ExpandCollapseButtons = ({ expandAll, expand, children }) => (
  <ButtonGroup className="action-btn-grp">
    <Button bsStyle="primary" onClick={() => expandAll(expand, true)}>
      <FaBackward />
    </Button>
    <Button disabled>{children}</Button>
    <Button bsStyle="primary" onClick={() => expandAll(expand, false)}>
      <FaForward />
    </Button>
  </ButtonGroup>
);
