import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import RawDataInput from "./RawDataInput";
import DelimiterForm from "./DelimiterForm";
import IdxForm from "./IdxForm";
import { func, shape, string } from "prop-types";
import { DELIMITER as idDelimiter } from "../../../utils/mappingHelpers";
import "./AddNodesForm.css";

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

    // Create array of flat data, add tier for unique IDs
    const idIdx = valueIdx <= labelIdx ? 0 : 1;
    const titleIdx = valueIdx <= labelIdx ? 1 : 0;
    const flatData = rawData
      .trim()
      .split("\n")
      .map(line => {
        let lineArr = line.split(delimiter);
        return {
          id: `${tier}${idDelimiter}${lineArr[idIdx]}`,
          title: lineArr[titleIdx],
          parent: parentId || null,
          isInternal: false
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
      return missingDelimiterArr.length ? false : true;
    }
    return null;
  }

  render() {
    const { rawData, delimiter, valueIdx, labelIdx } = this.state;
    const rawDataValidationState = this.getRawDataValidationState();
    const isValidated = rawDataValidationState;

    return (
      <Form onSubmit={this.handleSubmit}>
        <RawDataInput
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
        <Row>
          <Col id="add-data-btn-container" className="right">
            <Button
              variant="info"
              type="submit"
              disabled={isValidated ? false : true}
            >
              Done
            </Button>
            <Button onClick={this.props.handleClose}>Cancel</Button>
          </Col>
        </Row>
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
