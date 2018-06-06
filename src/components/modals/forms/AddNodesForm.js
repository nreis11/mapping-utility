import React from "react";
import { Form, Button } from "react-bootstrap";
import RawDataForm from "./RawDataForm";
import DelimiterForm from "./DelimiterForm";
import IdxForm from "./IdxForm";
import { func } from "prop-types";

class AddNodesForm extends React.Component {
  constructor(props) {
    super(props);

    // TEMP RAWDATA
    this.state = {
      rawData:
        "51|Bar\n52|Management\n53|Kitchen\n54|Floor\n16|Barista\n166|Hotel\n382|Counter",
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
    const { nodeInfo, handleClose, onAddNodes } = this.props;
    if (!rawData) {
      this.props.handleClose();
      return;
    }
    // Create array of nodes to concat
    const idIdx = valueIdx < labelIdx ? 0 : 1;
    const titleIdx = valueIdx < labelIdx ? 1 : 0;
    const nodesArr = rawData.split("\n").map(line => {
      let lineArr = line.split(delimiter);
      return {
        id: lineArr[idIdx],
        title: lineArr[titleIdx],
        expanded: false,
        parent: null
      };
    });

    onAddNodes(nodesArr, nodeInfo);
    handleClose();
  }

  render() {
    const { rawData, delimiter, valueIdx, labelIdx } = this.state;
    const valueIdxKey = "valueIdx";
    const labelIdxKey = "labelIdx";

    return (
      <Form onSubmit={this.handleSubmit}>
        <RawDataForm
          onChange={this.handleChange}
          rawData={rawData}
          delimiter={delimiter}
        />
        <DelimiterForm onChange={this.handleChange} delimiter={delimiter} />
        <IdxForm
          onChange={this.handleChange}
          idx={valueIdx}
          name={valueIdxKey}
        />
        <IdxForm
          onChange={this.handleChange}
          idx={labelIdx}
          name={labelIdxKey}
        />
        <Button bsStyle="info" className="pull-right" type="submit">
          Import Nodes
        </Button>
      </Form>
    );
  }
}

AddNodesForm.propTypes = {
  onAddNodes: func.isRequired,
  handleClose: func.isRequired
};

export default AddNodesForm;
