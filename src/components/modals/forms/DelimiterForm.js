import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class DelimiterForm extends Component {
  getValidationState() {
    const { delimiter } = this.props;
    const length = delimiter.length;
    if (length === 1) return "success";
    else if (length > 1) return "error";
    return null;
  }

  render(props) {
    const { delimiter, onChange } = this.props;

    return (
      <FormGroup
        controlId="formDelimiter"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Delimiter</ControlLabel>
        <FormControl
          type="text"
          name="delimiter"
          value={delimiter}
          placeholder="What seperates the value from the label?"
          onChange={onChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

export default DelimiterForm;
