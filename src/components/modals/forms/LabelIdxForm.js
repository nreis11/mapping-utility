import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LabelIdxForm extends Component {
  getValidationState() {
    const { labelIdx } = this.props;
    if (!isNaN(labelIdx) && labelIdx.length === 1) {
      return "success";
    }

    if (isNaN(labelIdx) || labelIdx.length > 1) {
      return "error";
    }
    return null;
  }

  render() {
    const { labelIdx, onChange } = this.props;

    return (
      <FormGroup
        controlId="formLabelIdx"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Label Position</ControlLabel>
        <FormControl
          type="text"
          name="labelIdx"
          value={labelIdx}
          placeholder="Enter 1 or 2"
          onChange={onChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

export default LabelIdxForm;
