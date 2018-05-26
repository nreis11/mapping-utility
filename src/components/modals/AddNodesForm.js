import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

class AddNodesForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nodes: "",
      delimiter: "",
      value: "1",
      label: "2"
    };
  }

  getValidationState(name) {
    switch (name) {
      case "delimiter":
        const length = this.state.delimiter.length;
        if (length === 1) return "success";
        else if (length > 1) return "error";
        return null;
      case "value":
        const value = this.state.value;
        if (isNaN(value)) {
          return "error";
        }
        break;
      case "label":
        const label = this.state.label;
        if (isNaN(label)) {
          return "error";
        }
        break;
      default:
        return null;
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="formAddNodes">
          <ControlLabel>Add Data Here</ControlLabel>
          <FormControl
            type="text"
            name="nodes"
            componentClass="textarea"
            value={this.state.nodes}
            placeholder="Value|Label"
            onChange={this.handleChange}
            style={{ height: "40vh" }}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="formDelimiter"
          validationState={this.getValidationState("delimiter")}
        >
          <ControlLabel>Delimiter</ControlLabel>
          <FormControl
            type="text"
            name="delimiter"
            value={this.state.delimiter}
            placeholder="What seperates the value from the label?"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="formValuePosition"
          validationState={this.getValidationState("value")}
        >
          <ControlLabel>Value Position</ControlLabel>
          <FormControl
            type="text"
            name="value"
            value={this.state.value}
            placeholder="Enter 1 or 2"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="formLabel"
          validationState={this.getValidationState("label")}
        >
          <ControlLabel>Label Position</ControlLabel>
          <FormControl
            type="text"
            name="label"
            value={this.state.label}
            placeholder="Enter 1 or 2"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default AddNodesForm;
