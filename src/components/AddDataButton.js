import React from "react";
import { Button } from "react-bootstrap";
import PlusSign from "react-icons/lib/fa/plus";

const AddDataButton = props => {
  return (
    <Button bsStyle="info" bsSize="small">
      <PlusSign /> Add/Edit
    </Button>
  );
};

export default AddDataButton;
