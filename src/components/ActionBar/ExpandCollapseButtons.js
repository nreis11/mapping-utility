import React from "react";
import { func, bool } from "prop-types";
import { Button } from "react-bootstrap";
import { FaBackward, FaForward } from "react-icons/fa";

export const ExpandCollapseButtons = React.memo(
  ({ expandAll, expand, children }) => (
    <div>
      <Button
        className="action-btn"
        bsStyle="primary"
        onClick={() => expandAll(expand, true)}
      >
        <FaBackward className="react-icons" />
      </Button>
      <Button className="expand-info-btn" disabled>
        {children}
      </Button>
      <Button
        className="action-btn"
        bsStyle="primary"
        onClick={() => expandAll(expand, false)}
      >
        <FaForward className="react-icons" />
      </Button>
    </div>
  )
);

ExpandCollapseButtons.propTypes = {
  expandAll: func.isRequired,
  expand: bool.isRequired
};
