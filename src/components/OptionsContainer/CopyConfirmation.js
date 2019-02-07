import React from "react";
import { FaCheck } from "react-icons/fa";
import { Alert } from "react-bootstrap";
import "./CopyConfirmation.css";

const CopyConfirmation = () => (
  <Alert className="pull-left" bsStyle="success">
    <FaCheck className="react-icons" />
    &nbsp;Copied.
  </Alert>
);

export default CopyConfirmation;
