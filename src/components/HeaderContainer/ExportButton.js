import React from "react";
import { Button } from "react-bootstrap";

const ExportButton = ({ handleExport }) => {
  return (
    <Button
      onClick={() => handleExport()}
      bsStyle="success"
      className="pull-right"
      style={{ height: "100%" }}
    >
      Export
    </Button>
  );
};

export default ExportButton;
