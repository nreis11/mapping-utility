import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { string, func, bool } from "prop-types";

class RawDataInput extends React.PureComponent {
  render() {
    const { rawData, onChange, validationState } = this.props;

    return (
      <FormGroup controlId="formAddNodes">
        <FormLabel>Data</FormLabel>
        <FormControl
          name="rawData"
          type="text"
          as="textarea"
          isInvalid={rawData && !validationState}
          isValid={validationState}
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

RawDataInput.propTypes = {
  rawData: string.isRequired,
  onChange: func.isRequired,
  validationState: bool
};

RawDataInput.defaultProps = {
  validationState: null
};

export default RawDataInput;
