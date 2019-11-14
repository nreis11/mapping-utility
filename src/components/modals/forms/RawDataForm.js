import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { string, func } from "prop-types";

class RawDataForm extends React.PureComponent {
  render() {
    const { rawData, onChange, validationState } = this.props;

    return (
      <FormGroup controlId="formAddNodes" validationState={validationState}>
        <ControlLabel>Data</ControlLabel>
        <FormControl
          type="text"
          name="rawData"
          componentClass="textarea"
          value={rawData}
          placeholder="Ex. Value|Label"
          onChange={onChange}
          style={{ height: "55vh" }}
          autoFocus
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

RawDataForm.propTypes = {
  rawData: string.isRequired,
  onChange: func.isRequired,
  validationState: string
};

RawDataForm.defaultProps = {
  validationState: null
};

export default RawDataForm;
