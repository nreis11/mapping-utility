import React from "react";
import { Col } from "react-bootstrap";

import ExportButton from "./ExportButton";
import Header from "./Header";
import EditModal from "../modals/EditModal";
import Options from "./Options";

const HeaderExt = props => {
  const {
    externalName,
    extTreeKey,
    extTreeData,
    options,
    handleChange,
    handleOptionChange,
    handleAddNodesToExtTree,
    handleRemoveNode,
    handleExport
  } = props;

  return (
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
      <ExportButton handleExport={handleExport} />
    </Col>
  );
};

export default HeaderExt;
