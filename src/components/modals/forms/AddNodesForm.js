import React from "react";
import { Form, Button } from "react-bootstrap";
import RawDataForm from "./RawDataForm";
import DelimiterForm from "./DelimiterForm";
import ValueIdxForm from "./ValueIdxForm";
import LabelIdxForm from "./LabelIdxForm";

class AddNodesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: "",
      delimiter: "|",
      valueIdx: 1,
      labelIdx: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { delimiter, valueIdx, labelIdx, rawData } = this.state;
    if (!rawData) return;
    // Create array of nodes to concat
    const idIdx = valueIdx < labelIdx ? 0 : 1;
    const titleIdx = valueIdx < labelIdx ? 1 : 0;
    const nodesArr = rawData.split("\n").map(node => {
      let nodeArr = node.split(delimiter);
      return {
        id: nodeArr[idIdx],
        title: nodeArr[titleIdx],
        expanded: false,
        parent: null,
        children: []
      };
    });

    this.props.handleAddNodesToExtTree(nodesArr);
    this.props.onClose();
  }

  render() {
    const { rawData, delimiter, valueIdx, labelIdx } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <RawDataForm
          onChange={this.handleChange}
          rawData={rawData}
          delimiter={delimiter}
        />
        <DelimiterForm onChange={this.handleChange} delimiter={delimiter} />
        <ValueIdxForm onChange={this.handleChange} valueIdx={valueIdx} />
        <LabelIdxForm onChange={this.handleChange} labelIdx={labelIdx} />
        <Button bsStyle="info" className="pull-right" type="submit">
          Import Nodes
        </Button>
      </Form>
    );
  }
}

export default AddNodesForm;
