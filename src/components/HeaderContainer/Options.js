import React from "react";
import { func } from "prop-types";
import "./Options.css";

const Options = props => {
  const { outputParents, parentsSelectable } = props.options;

  // const inputStyle = {
  //   marginLeft: "10px"
  // };

  // const labelStyle = {
  //   marginRight: "10px"
  // };

  return (
    <form>
      <label className="options-label">
        Output Parents
        <input
          type="checkbox"
          name="outputParents"
          checked={outputParents}
          onChange={event => props.onOptionChange(event)}
        />
      </label>
      <label className="options-label">
        Parents Selectable
        <input
          type="checkbox"
          name="parentsSelectable"
          checked={parentsSelectable}
          onChange={event => props.onOptionChange(event)}
        />
      </label>
    </form>
  );
};

Options.propTypes = {
  onOptionChange: func.isRequired
};

export default Options;
