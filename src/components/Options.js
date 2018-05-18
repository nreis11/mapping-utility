import React from "react";

const Options = props => {
  const outputParents = props.options.outputParents;
  const parentsSelectable = props.options.parentsSelectable;

  const inputStyle = {
    marginLeft: "10px"
  };

  const labelStyle = {
    marginRight: "10px"
  };

  return (
    <form>
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

export default Options;
