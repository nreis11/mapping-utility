import React from "react";
import { Button } from "react-bootstrap";

export const ActionButton = React.memo(({ dataCmd, children, onClick }) => (
  // Sending onClick to handleKeyDown on MainContainer to map commands
  <Button bsStyle="primary" data-cmd={dataCmd} onClick={onClick} block>
    {children}
  </Button>
));
