import React from "react";
import { Form, Button } from "react-bootstrap";
import RawDataForm from "./RawDataForm";
import DelimiterForm from "./DelimiterForm";
import IdxForm from "./IdxForm";
import { func, shape } from "prop-types";

class AddNodesForm extends React.Component {
  constructor(props) {
    super(props);

    // TEMP RAWDATA
    this.state = {
      rawData:
        "24000|Advertising, Communication & PR\n1000|Agriculture, Fishing & Forestry\n27001|Armed Forces\n30001|Art, Culture, Entertainment & Sport\n23003|Auditing/Accounting\n10001|Automotive Sector\n19000|Banking, Financial Services & Insurance\n14000|Building & Construction\n7000|Chemical & Petrochemical Industry\n31001|Conservation & Environment\n23001|Consulting\n17000|Distribution, Transport & Logistics\n28000|Education & Training\n13000|Electricity, Gas & Water Supply\n11000|Fast Moving Consumer Goods/ Durables\n3000|Food & Beverages\n16000|Hotels, Restaurants & Catering\n25000|HR Services, Recruitment & Selection\n21000|IT & Internet\n23002|Legal\n30002|Leisure & Tourism\n12000|Manufacturing\n6002|Media, Audiovisual & Publishing\n29000|Medical, Health & Social Care\n2000|Mining & Quarrying\n31002|Other\n26000|Other Business Activities & Services\n8000|Pharmaceutical Sector\n6001|Printing  Industry\n27002|Public Administration\n27003|Public Services\n20000|Real Estate\n22000|Research & Development\n10002|Space and Aerospace\n9000|Steel Industry\n18000|Telecommunication Services\n4000|Textiles, Clothing & Leather\n15000|Wholesale, Retail Trade",
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
      handleClose();
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
  nodeInfo: shape({})
};

AddNodesForm.defaultProps = {
  nodeInfo: null
};

export default AddNodesForm;
