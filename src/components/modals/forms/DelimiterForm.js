import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import { string, func } from "prop-types";

class DelimiterForm extends Component {
  getValidationState() {
    const { delimiter } = this.props;
    const length = delimiter.length;
    if (length === 1) return "success";
    else if (length > 1) return "error";
    return null;
  }

  render() {
    const { delimiter, onChange } = this.props;

    return (
      <Col md={4}>
        <FormGroup
          controlId="formDelimiter"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Delimiter</ControlLabel>
          <FormControl
            type="text"
            name="delimiter"
            value={delimiter}
            placeholder="What separates the value from the label?"
            onChange={onChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Col>
    );
  }
}

DelimiterForm.propTypes = {
  onChange: func.isRequired,
  delimiter: string
};

DelimiterForm.default = {
  delimiter: ""
};

export default DelimiterForm;
