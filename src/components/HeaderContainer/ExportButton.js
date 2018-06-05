import React from "react";
import { Button } from "react-bootstrap";

const ExportButton = ({ handleExport }) => {
  return (
    <Button onClick={() => handleExport()} bsStyle="success">
      Export
    </Button>
  );
};

export default ExportButton;
