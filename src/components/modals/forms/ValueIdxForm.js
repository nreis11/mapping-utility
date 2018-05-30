import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class ValueIdxForm extends Component {
  getValidationState() {
    const { valueIdx } = this.props;
    if (!isNaN(valueIdx) && valueIdx.length === 1) {
      return "success";
    }
    if (isNaN(valueIdx) || valueIdx.length > 1) {
      return "error";
    }
    return null;
  }

  render() {
    const { valueIdx, onChange } = this.props;

    return (
      <FormGroup
        controlId="formValuePosition"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Value Position</ControlLabel>
        <FormControl
          type="text"
          name="valueIdx"
          value={valueIdx}
          placeholder="Enter 1 or 2"
          onChange={onChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

export default ValueIdxForm;
