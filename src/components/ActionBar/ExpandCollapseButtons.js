import React from "react";
import { func, bool } from "prop-types";
import { Button } from "react-bootstrap";
import { FaBackward, FaForward } from "react-icons/fa";

export const ExpandCollapseButtons = React.memo(
  ({ expandAll, expand, children }) => (
    <React.Fragment>
      <Button
        className="action-btn"
        variant="primary"
        onClick={() => expandAll(expand, true)}
      >
        <FaBackward className="react-icons" />
      </Button>
      <Button disabled className="expand-info-txt">
        {children}
      </Button>
      <Button
        className="action-btn"
        variant="primary"
        onClick={() => expandAll(expand, false)}
      >
        <FaForward className="react-icons" />
      </Button>
    </React.Fragment>
  )
);

ExpandCollapseButtons.propTypes = {
  expandAll: func.isRequired,
  expand: bool.isRequired
};
