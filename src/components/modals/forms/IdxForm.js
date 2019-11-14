import React from "react";
import { FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import { string } from "prop-types";

class IdxForm extends React.PureComponent {
  render() {
    const { name } = this.props;

    return (
      <Col md={4}>
        <FormGroup controlId={`form${name}`}>
          <ControlLabel>Value Position</ControlLabel>
          <FormControl
            componentClass="select"
            value={name === "valueIdx" ? "1" : "2"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </FormControl>
        </FormGroup>
      </Col>
    );
  }
}

IdxForm.propTypes = {
  name: string.isRequired
};

export default IdxForm;
