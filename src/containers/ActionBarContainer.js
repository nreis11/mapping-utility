import React from "react";
import { func } from "prop-types";

import { Col, Button, ButtonGroup } from "react-bootstrap";
import { FaBackward, FaForward } from "react-icons/fa";

import { ExpandCollapseButtons } from "../components/ActionBar/ExpandCollapseButtons";
import { ActionButton } from "../components/ActionBar/ActionButton";

import "./ActionBarContainer.css";

export const ActionBarContainer = ({
  expandAll,
  onHighlightUnmapped,
  onClick
}) => {
  return (
    <Col className="text-center action-container">
      <Col className="action-btn-container">
        <ActionButton className="action-btn" dataCmd="space" onClick={onClick}>
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
      </Col>
      <Col className="action-btn-container">
        <Button
          className="action-btn"
          bsStyle="primary"
          onClick={onHighlightUnmapped}
          block
        >
          <FaBackward className="react-icons" /> Highlight Unmapped
        </Button>
        <ActionButton dataCmd="delete" onClick={onClick}>
          <FaBackward className="react-icons" /> Clear This Mapping
        </ActionButton>
        <ActionButton dataCmd="shift-delete" onClick={onClick}>
          <FaBackward className="react-icons" /> Clear Entire Node
        </ActionButton>
      </Col>
      <ButtonGroup className="expand-btn-grp">
        <ExpandCollapseButtons expandAll={expandAll} expand={true}>
          Expand All
        </ExpandCollapseButtons>
        <ExpandCollapseButtons expandAll={expandAll} expand={false}>
          Collapse All
        </ExpandCollapseButtons>
      </ButtonGroup>
    </Col>
  );
};

ActionBarContainer.propTypes = {
  expandAll: func.isRequired,
  onClick: func.isRequired,
  onHighlightUnmapped: func.isRequired
};

export default React.memo(ActionBarContainer);
