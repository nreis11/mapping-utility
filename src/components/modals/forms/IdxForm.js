import React from "react";
import { FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import { string, func } from "prop-types";

class IdxForm extends React.PureComponent {
  render() {
    const { name, onChange, idx } = this.props;

    return (
      <Col md={4}>
        <FormGroup controlId={`form${name}`}>
          <ControlLabel>Value Position</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            value={idx}
            onChange={onChange}
            name={name}
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
  name: string.isRequired,
  idx: string.isRequired,
  onChange: func.isRequired
};

export default IdxForm;
