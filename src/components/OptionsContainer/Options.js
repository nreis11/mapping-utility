import React from "react";
import { func, shape, bool } from "prop-types";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "./Options.css";

const Options = (props) => {
  const { outputParents, parentsSelectable, outputLabels } = props.options;

  const createPopover = ({ title, content }) => (
    <Popover id={`popover-${title}`}>
      <Popover.Title as="h3">
        <strong>{title}</strong>
      </Popover.Title>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );

  return (
    <React.Fragment>
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="top"
        overlay={createPopover({
          title: "Output Parents",
          content: "Export all tiers.",
        })}
      >
        <label className="options-label">
          Output Parents
          <input
            type="checkbox"
            name="outputParents"
            checked={outputParents}
            onChange={(event) => props.onOptionChange(event)}
          />
        </label>
      </OverlayTrigger>
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="top"
        overlay={createPopover({
          title: "Parents Selectable",
          content: "All parents can be mapped.",
        })}
      >
        <label className="options-label">
          Parents Selectable
          <input
            type="checkbox"
            name="parentsSelectable"
            checked={parentsSelectable}
            onChange={(event) => props.onOptionChange(event)}
          />
        </label>
      </OverlayTrigger>
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="top"
        overlay={createPopover({
          title: "Output Labels",
          content: "Export eQuest label as board value.",
        })}
      >
        <label className="options-label">
          Output Labels
          <input
            type="checkbox"
            name="outputLabels"
            checked={outputLabels}
            onChange={(event) => props.onOptionChange(event)}
          />
        </label>
      </OverlayTrigger>
    </React.Fragment>
  );
};

Options.propTypes = {
  onOptionChange: func.isRequired,
  options: shape({
    parentsSelectable: bool.isRequired,
    outputParents: bool.isRequired,
    outputLabels: bool.isRequired,
  }),
};

export default React.memo(Options);
