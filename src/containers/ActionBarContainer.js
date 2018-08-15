import React from "react";
import { func } from "prop-types";

import { Col, Button, ButtonGroup } from "react-bootstrap";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

import { ExpandCollapseButtons } from "../components/ActionBar/ExpandCollapseButtons";
import { ActionButton } from "../components/ActionBar/ActionButton";

import "./ActionBarContainer.css";

export const ActionBar = ({ expandAll, onHighlightUnmapped, onClick }) => {
  return (
    <Col md={2} className="text-center action-container">
      <ButtonGroup>
        <ActionButton dataCmd="space" onClick={onClick}>
          <FaForward className="react-icons" /> Map{" "}
          <FaForward className="react-icons" />
          <br />
          (single)
        </ActionButton>
        <ActionButton dataCmd="shift-space" onClick={onClick}>
          <FaForward className="react-icons" /> Map Node{" "}
          <FaForward className="react-icons" />
          <br />
          (preserve)
        </ActionButton>
        <ActionButton dataCmd="ctrl-space" onClick={onClick}>
          <FaForward className="react-icons" /> Map Node{" "}
          <FaForward className="react-icons" />
          <br />
          (overwrite)
        </ActionButton>
      </ButtonGroup>
      <ButtonGroup>
        <Button bsStyle="primary" onClick={onHighlightUnmapped} block>
          <FaBackward className="react-icons" /> Highlight Unmapped
        </Button>
        <ActionButton dataCmd="delete" onClick={onClick}>
          <FaBackward className="react-icons" /> Clear This Map
        </ActionButton>
        <ActionButton dataCmd="shift-delete" onClick={onClick}>
          <FaBackward className="react-icons" /> Clear Entire Node
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
