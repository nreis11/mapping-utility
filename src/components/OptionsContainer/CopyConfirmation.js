import React from "react";
import { FaCheck } from "react-icons/fa";
import { Alert } from "react-bootstrap";
import "./CopyConfirmation.css";

const CopyConfirmation = () => (
  <Alert id="copy-confirmation" variant="success">
    <FaCheck />
    &nbsp;Copied.
  </Alert>
);

export default CopyConfirmation;
