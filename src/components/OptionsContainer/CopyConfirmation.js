import React from "react";
import { FaCheck } from "react-icons/fa";
import { Alert } from "react-bootstrap";
import "./CopyConfirmation.css";

const CopyConfirmation = () => (
  <Alert className="pull-left" variant="success">
    <FaCheck />
    &nbsp;Copied.
  </Alert>
);

export default CopyConfirmation;
