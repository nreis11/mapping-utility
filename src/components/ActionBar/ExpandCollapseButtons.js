import React from "react";
import { Button } from "react-bootstrap";
import { FaBackward, FaForward } from "react-icons/fa";

export const ExpandCollapseButtons = React.memo(({ expandAll, expand, children }) => (
  <div>
    <Button bsStyle="primary" onClick={() => expandAll(expand, true)}>
      <FaBackward className="react-icons" />
    </Button>
    <Button id="expand-info-btn" disabled>
      {children}
    </Button>
    <Button bsStyle="primary" onClick={() => expandAll(expand, false)}>
      <FaForward className="react-icons" />
    </Button>
  </div>
));
