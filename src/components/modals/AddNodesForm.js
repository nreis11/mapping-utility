import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from "react-bootstrap";

class AddNodesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: "",
      delimiter: "|",
      valueIdx: "1",
      labelIdx: "2"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValidationState(name) {
    switch (name) {
      case "delimiter":
        const length = this.state.delimiter.length;
        if (length === 1) return "success";
        else if (length > 1) return "error";
        return null;
      case "value":
      case "label":
        const value =
          name === "value" ? this.state.valueIdx : this.state.labelIdx;
        if (isNaN(value) || value.length > 1) {
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

  handleSubmit(e) {
    e.preventDefault();
    const { delimiter, valueIdx, labelIdx, rawData } = this.state;
    // Create array of nodes to concat
    const idIdx = valueIdx < labelIdx ? 0 : 1;
    const titleIdx = valueIdx < labelIdx ? 1 : 0;
    const nodesArr = rawData.split("\n").map(node => {
      let nodeArr = node.split(delimiter);
      return {
        id: nodeArr[idIdx],
        title: nodeArr[titleIdx],
        expanded: false,
        children: []
      };
    });

    this.props.handleAddNodesToExtTree(nodesArr);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formAddNodes">
          <ControlLabel>Add Data Here</ControlLabel>
          <FormControl
            type="text"
            name="rawData"
            componentClass="textarea"
            value={this.state.rawData}
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
            name="valueIdx"
            value={this.state.valueIdx}
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
            name="labelIdx"
            value={this.state.labelIdx}
            placeholder="Enter 1 or 2"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default AddNodesForm;
