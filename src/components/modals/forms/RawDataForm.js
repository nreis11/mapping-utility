import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { string, func } from "prop-types";

class RawDataForm extends Component {
  getValidationState() {
    const { delimiter, rawData } = this.props;
    if (delimiter && rawData) {
      const arr = rawData.split("\n").filter(line => {
        return !line.includes(delimiter);
      });
      if (arr.length) {
        return "error";
      }
    }
    return null;
  }

  render(props) {
    const { rawData, onChange } = this.props;

    return (
      <FormGroup
        controlId="formAddNodes"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Add Data Here</ControlLabel>
        <FormControl
          type="text"
          name="rawData"
          componentClass="textarea"
          value={rawData}
          placeholder="Value|Label"
          onChange={onChange}
          style={{ height: "40vh" }}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

RawDataForm.propTypes = {
  rawData: string.isRequired,
  onChange: func.isRequired,
  delimiter: string
};

RawDataForm.default = {
  delimiter: ""
};

export default RawDataForm;
