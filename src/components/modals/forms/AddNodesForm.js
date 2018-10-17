import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import RawDataForm from "./RawDataForm";
import DelimiterForm from "./DelimiterForm";
import IdxForm from "./IdxForm";
import { func, shape, string } from "prop-types";
import { delimiter as idDelimiter } from "../../../utilities/mappingHelpers";

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
    const { nodeInfo, handleClose, onAddNodes } = this.props;
    let parentId;

    if (nodeInfo) {
      parentId = nodeInfo.node.id;
    }

    if (!rawData) {
      handleClose();
      return;
    }

    // Check for validation errors
    const formError = document.querySelector(".has-error");
    if (formError) {
      return;
    }

    // Create array of flat data
    const idIdx = valueIdx < labelIdx ? 0 : 1;
    const titleIdx = valueIdx < labelIdx ? 1 : 0;
    const flatData = rawData.split("\n").map(line => {
      let lineArr = line.split(delimiter);
      return {
        id: parentId ? `${parentId}${idDelimiter}${lineArr[idIdx]}` : lineArr[idIdx],
        title: lineArr[titleIdx],
        parent: parentId ? parentId : null
      };
    });

    onAddNodes(flatData);
    handleClose();
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
        <Row>
          <IdxForm
            onChange={this.handleChange}
            idx={valueIdx}
            name="valueIdx"
          />
          <DelimiterForm onChange={this.handleChange} delimiter={delimiter} />
          <IdxForm
            onChange={this.handleChange}
            idx={labelIdx}
            name="labelIdx"
          />
        </Row>
        <Button
          style={{ marginLeft: 5 }}
          bsStyle="info"
          className="pull-right"
          type="submit"
        >
          Import Nodes
        </Button>
      </Form>
    );
  }
}

AddNodesForm.propTypes = {
  onAddNodes: func.isRequired,
  handleClose: func.isRequired,
  nodeInfo: shape({node: shape({id: string.isRequired, title: string.isRequired})})
};

AddNodesForm.defaultProps = {
  nodeInfo: null
};

export default AddNodesForm;
