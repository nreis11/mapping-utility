import React from "react";
import { func } from "prop-types";

import { Col, ButtonGroup } from "react-bootstrap";
import { FaArrowLeft, FaArrowsAltH } from "react-icons/fa";

import { ExpandCollapseButtons } from "../components/ActionBar/ExpandCollapseButtons";
import { ActionButton } from "../components/ActionBar/ActionButton";

import "./ActionBarContainer.css";

export const ActionBarContainer = ({
  expandAll,
  onHighlightUnmapped,
  onClick,
}) => {
  return (
    <Col className="text-center action-container">
      <Col className="action-btn-container">
        <ActionButton className="action-btn" dataCmd="space" onClick={onClick}>
          <FaArrowsAltH />
          &nbsp;Map&nbsp;
          <FaArrowsAltH />
          <br />
          (single)
        </ActionButton>
        <ActionButton dataCmd="shift-space" onClick={onClick}>
          <FaArrowsAltH />
          &nbsp;Map Node&nbsp;
          <FaArrowsAltH />
          <br />
          (preserve)
        </ActionButton>
        <ActionButton dataCmd="ctrl-space" onClick={onClick}>
          <FaArrowsAltH />
          &nbsp;Map Node&nbsp;
          <FaArrowsAltH />
          <br />
          (overwrite)
        </ActionButton>
      </Col>
      <Col className="action-btn-container">
        <ActionButton dataCmd={"highlight"} onClick={onHighlightUnmapped}>
          <FaArrowLeft />
          &nbsp;Highlight Unmapped
        </ActionButton>
        <ActionButton dataCmd="delete" onClick={onClick}>
          <FaArrowLeft />
          &nbsp;Clear This Mapping
        </ActionButton>
        <ActionButton dataCmd="shift-delete" onClick={onClick}>
          <FaArrowLeft />
          &nbsp;Clear Entire Node
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
  onHighlightUnmapped: func.isRequired,
};

export default React.memo(ActionBarContainer);
