import React from "react";
import { func } from "prop-types";

import { Col, ButtonGroup } from "react-bootstrap";
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
      </Col>
      <Col className="action-btn-container">
        <ActionButton dataCmd={"highlight"} onClick={onHighlightUnmapped}>
          <FaBackward /> Highlight Unmapped
        </ActionButton>
        <ActionButton dataCmd="delete" onClick={onClick}>
          <FaBackward /> Clear This Mapping
        </ActionButton>
        <ActionButton dataCmd="shift-delete" onClick={onClick}>
          <FaBackward /> Clear Entire Node
        </ActionButton>
      </Col>
      <Col className="action-btn-container">
        <ButtonGroup className="expand-btn-grp" size="sm">
          <ExpandCollapseButtons expandAll={expandAll} expand={true}>
            Expand All
          </ExpandCollapseButtons>
        </ButtonGroup>
        <ButtonGroup className="expand-btn-grp" size="sm">
          <ExpandCollapseButtons expandAll={expandAll} expand={false}>
            Collapse All
          </ExpandCollapseButtons>
        </ButtonGroup>
      </Col>
    </Col>
  );
};

ActionBarContainer.propTypes = {
  expandAll: func.isRequired,
  onClick: func.isRequired,
  onHighlightUnmapped: func.isRequired
};

export default React.memo(ActionBarContainer);
