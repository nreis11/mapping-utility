import React from "react";
import { func } from "prop-types";

import { Col, Button, ButtonGroup } from "react-bootstrap";
import { ExpandCollapseButtons } from "./ExpandCollapseButtons";
import FaForward from "react-icons/lib/fa/forward";
import FaBackward from "react-icons/lib/fa/backward";

import "./ActionBar.css";
import { ActionButton } from "./ActionButton";

export const ActionBar = ({ expandAll, onHighlightUnmapped, onClick }) => {
  return (
    <Col md={2} className="text-center action-container">
      <ButtonGroup>
        <ActionButton dataCmd="space" onClick={onClick}>
          <FaForward /> Map <FaForward />
          <br />
          (single)
        </ActionButton>
        <ActionButton dataCmd="shift-space" onClick={onClick}>
          <FaForward /> Map Node <FaForward />
          <br />
          (preserve)
        </ActionButton>
        <ActionButton dataCmd="ctrl-space" onClick={onClick}>
          <FaForward /> Map Node <FaForward />
          <br />
          (overwrite)
        </ActionButton>
      </ButtonGroup>
      <ButtonGroup>
        <Button bsStyle="primary" onClick={onHighlightUnmapped} block>
          Highlight Unmapped
        </Button>
        <ActionButton dataCmd="delete" onClick={onClick}>
          <FaBackward /> Clear This Map
        </ActionButton>
        <ActionButton dataCmd="shift-delete" onClick={onClick}>
          <FaBackward /> Clear Entire Node
        </ActionButton>
      </ButtonGroup>
      <ExpandCollapseButtons expandAll={expandAll} expand={true}>
        Expand All
      </ExpandCollapseButtons>
      <ExpandCollapseButtons expandAll={expandAll} expand={false}>
        Collapse All
      </ExpandCollapseButtons>
    </Col>
  );
};

ActionBar.propTypes = {
  expandAll: func.isRequired,
  onClick: func.isRequired,
  onHighlightUnmapped: func.isRequired
};

export default ActionBar;
