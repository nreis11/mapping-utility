import React from "react";
import { func } from "prop-types";

const Options = props => {
  const { outputParents, parentsSelectable } = props.options;

  const inputStyle = {
    marginLeft: "10px"
  };

  const labelStyle = {
    marginRight: "10px"
  };

  return (
    <form className="pull-left" style={{ display: "inline-block" }}>
      <label style={labelStyle}>
        Output Parents
        <input
          style={inputStyle}
          type="checkbox"
          name="outputParents"
          value={outputParents}
          onChange={event => props.onOptionChange(event)}
        />
      </label>
      <label style={labelStyle}>
        Parents Selectable
        <input
          style={inputStyle}
          type="checkbox"
          name="parentsSelectable"
          value={parentsSelectable}
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
