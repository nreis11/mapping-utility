import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import RawDataForm from "./RawDataForm";
import DelimiterForm from "./DelimiterForm";
import IdxForm from "./IdxForm";
import { func, shape, string } from "prop-types";
import { delimiter as idDelimiter } from "../../../utilities/mappingHelpers";

class AddNodesForm extends React.PureComponent {
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
    this.getRawDataValidationState = this.getRawDataValidationState.bind(this);

    this.valueName = "valueIdx";
    this.labelName = "labelIdx";
  }

  handleChange(e) {
    const { name, value } = e.target;
    // Force delimiter validation
    if (name === "delimiter" && value.length > 1) {
      return;
    }
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { delimiter, rawData, valueIdx, labelIdx } = this.state;
    const { nodeInfo, handleClose, onAddNodes } = this.props;
    let parentId;
    let tier = 1;

    // Adding children
    if (nodeInfo) {
      parentId = nodeInfo.node.id;
      tier = parseInt(parentId.split(idDelimiter)[0]) + 1;
    }

    // Check for validation errors
    const formError = document.querySelector(".has-error");
    if (formError) {
      return;
    }

    // Create array of flat data, add tier for unique IDs
    const idIdx = valueIdx <= labelIdx ? 0 : 1;
    const titleIdx = valueIdx <= labelIdx ? 1 : 0;
    const flatData = rawData.split("\n").map(line => {
      let lineArr = line.split(delimiter);
      return {
        id: `${tier}${idDelimiter}${lineArr[idIdx]}`,
        title: lineArr[titleIdx],
        parent: parentId || null
      };
    });

    onAddNodes(flatData);
    handleClose();
  }

  getRawDataValidationState() {
    // Check that every line has a delimiter
    const { delimiter, rawData } = this.state;
    if (delimiter && rawData) {
      const missingDelimiterArr = rawData
        .trim()
        .split("\n")
        .filter(line => !line.includes(delimiter));
      return missingDelimiterArr.length ? "error" : "success";
    }
    return null;
  }

  render() {
    const { rawData, delimiter, valueIdx, labelIdx } = this.state;
    const rawDataValidationState = this.getRawDataValidationState();
    const isValidated = rawDataValidationState === "success";

    return (
      <Form onSubmit={this.handleSubmit}>
        <RawDataForm
          onChange={this.handleChange}
          rawData={rawData}
          validationState={rawDataValidationState}
        />
        <Row>
          <IdxForm
            name={this.valueName}
            onChange={this.handleChange}
            idx={valueIdx}
          />
          <DelimiterForm onChange={this.handleChange} delimiter={delimiter} />
          <IdxForm
            name={this.labelName}
            onChange={this.handleChange}
            idx={labelIdx}
          />
        </Row>
        <Button
          style={{ marginLeft: 5 }}
          bsStyle="info"
          className="pull-right"
          type="submit"
          disabled={isValidated ? false : true}
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
  nodeInfo: shape({
    node: shape({ id: string.isRequired, title: string.isRequired })
  })
};

AddNodesForm.defaultProps = {
  nodeInfo: null
};

export default AddNodesForm;
