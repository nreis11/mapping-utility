import React from "react";
import { Panel } from "react-bootstrap";

const OptionsContainer = props => {
  return (
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Options</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <span className="pull-left">
          <strong>{props.left}</strong>
        </span>
        <span className="pull-right">{props.right}</span>
      </Panel.Body>
    </Panel>
  );
};

export default React.memo(OptionsContainer);
