import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { string, func } from "prop-types";

class RawDataForm extends React.PureComponent {
  render() {
    const { rawData, onChange, validationState } = this.props;

    return (
      <FormGroup controlId="formAddNodes" validationState={validationState}>
        <FormLabel>Data</FormLabel>
        <FormControl
          type="text"
          name="rawData"
          as="textarea"
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
