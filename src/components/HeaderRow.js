import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HeaderRow.css";

import ExportButton from "./ExportButton";
import Header from "./Header";
import TypeSelector from "./TypeSelector";
import EditModal from "./modals/EditModal";
import Options from "./Options";

const HeaderRow = props => {
  const {
    internalName,
    externalName,
    extTreeKey,
    extTreeData,
    handleTypeSelect,
    options,
    handleChange,
    handleOptionChange,
    handleAddNodesToExtTree,
    handleRemoveNode
  } = props;

  return (
    <Row className="show-grid">
      <Col md={5}>
        <Header name={internalName} />
        <TypeSelector onSelect={handleTypeSelect} />
      </Col>
      <Col md={5} mdOffset={2} className="flex-container">
        <Header name={externalName} />
        <EditModal
          treeKey={extTreeKey}
          treeData={extTreeData}
          onChange={handleChange}
          handleAddNodesToExtTree={handleAddNodesToExtTree}
          handleRemoveNode={handleRemoveNode}
        />
        <Options options={options} onOptionChange={handleOptionChange} />
        <ExportButton />
      </Col>
    </Row>
  );
};

export default HeaderRow;
