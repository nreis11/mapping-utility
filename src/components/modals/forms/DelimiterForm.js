import React from "react";
import { FormGroup, FormControl, FormLabel, Col } from "react-bootstrap";
import { string, func } from "prop-types";

class DelimiterForm extends React.PureComponent {
  render() {
    const { delimiter, onChange } = this.props;

    return (
      <Col md={4}>
        <FormGroup controlId="formDelimiter">
          <FormLabel>Delimiter</FormLabel>
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
