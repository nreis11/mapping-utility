import React from "react";
import { Button } from "react-bootstrap";
import { string, func } from "prop-types";

export const ActionButton = React.memo(({ dataCmd, children, onClick }) => (
  // Sending onClick to handleKeyDown on MainContainer to map commands
  <Button
    className="action-btn"
    bsStyle="primary"
    data-cmd={dataCmd}
    onClick={onClick}
    block
  >
    {children}
  </Button>
));

ActionButton.propTypes = {
  dataCmd: string.isRequired,
  onClick: func.isRequired
};
