import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { string, func } from "prop-types";

class RawDataForm extends React.PureComponent {
  getValidationState() {
    // Check that every line has a delimiter
    const { delimiter, rawData } = this.props;
    if (delimiter && rawData) {
      const missingDelimiterArr = rawData
        .trim()
        .split("\n")
        .filter(line => !line.includes(delimiter));
      if (missingDelimiterArr.length) {
        return "error";
      } else {
        return "success";
      }
    }
    return null;
  }

  render() {
    const { rawData, onChange } = this.props;

    return (
      <FormGroup
        controlId="formAddNodes"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Data</ControlLabel>
        <FormControl
          type="text"
          name="rawData"
          componentClass="textarea"
          value={rawData}
          placeholder="Ex. Value|Label"
          onChange={onChange}
          style={{ height: "55vh" }}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

RawDataForm.propTypes = {
  rawData: string.isRequired,
  onChange: func.isRequired,
  delimiter: string.isRequired
};

export default RawDataForm;
