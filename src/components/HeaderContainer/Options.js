import React from "react";
import { func } from "prop-types";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "./Options.css";

const Options = props => {
  const { outputParents, parentsSelectable } = props.options;

  const outputPopover = (
    <Popover id="popover-trigger-hover-focus" title="Output Parents">
      Export all tiers.
    </Popover>
  );

  const selectablePopover = (
    <Popover id="popover-trigger-hover-focus" title="Parents Selectable">
      All values can be mapped.
    </Popover>
  );

  return (
    <form>
      <OverlayTrigger
        trigger={["hover"]}
        placement="top"
        overlay={outputPopover}
      >
        <label className="options-label">
          Output Parents
          <input
            type="checkbox"
            name="outputParents"
            checked={outputParents}
            onChange={event => props.onOptionChange(event)}
          />
        </label>
      </OverlayTrigger>
      <OverlayTrigger
        trigger={["hover"]}
        placement="top"
        overlay={selectablePopover}
      >
        <label className="options-label">
          Parents Selectable
          <input
            type="checkbox"
            name="parentsSelectable"
            checked={parentsSelectable}
            onChange={event => props.onOptionChange(event)}
          />
        </label>
      </OverlayTrigger>
    </form>
  );
};

Options.propTypes = {
  onOptionChange: func.isRequired
};

export default Options;
