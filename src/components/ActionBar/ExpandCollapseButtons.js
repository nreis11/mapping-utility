import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export const ExpandCollapseButtons = ({ expandAll, expand, children }) => (
  <ButtonGroup className="action-btn-grp">
    <Button bsStyle="primary" onClick={() => expandAll(expand, true)}>
      <FaBackward className="react-icons" />
    </Button>
    <Button disabled>{children}</Button>
    <Button bsStyle="primary" onClick={() => expandAll(expand, false)}>
      <FaForward className="react-icons" />
    </Button>
  </ButtonGroup>
);
