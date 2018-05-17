import React from "react";

const Options = props => {
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
          name="output-parents"
          value="outputParents"
        />
      </label>
      <label style={labelStyle}>
        Parents Selectable
        <input
          style={inputStyle}
          type="checkbox"
          name="parents-selectable"
          value="parentsSelectable"
        />
      </label>
    </form>
  );
};

export default Options;
