import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { number, func } from "prop-types";

class IdxForm extends Component {
  getValidationState() {
    const { idx } = this.props;

    if (isNaN(idx) || idx.toString().length > 1) {
      return "error";
    }
    if (idx.toString().length === 1) {
      return "success";
    }
    return null;
  }

  render() {
    const { idx, onChange, name } = this.props;

    return (
      <FormGroup
        controlId={`form${name}`}
        validationState={this.getValidationState()}
      >
        <ControlLabel>
          {name === "valueIdx" ? "Value" : "Label"} Position
        </ControlLabel>
        <FormControl
          type="text"
          name={name}
          value={idx}
          placeholder="Enter 1 or 2"
          onChange={onChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

IdxForm.propTypes = {
  idx: number.isRequired,
  onChange: func.isRequired
};

export default IdxForm;
