import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ onSubmit }) => (
  <Form id="loginForm" onSubmit={onSubmit}>
    <FormGroup controlId="formUserName">
      <InputGroup>
        <InputGroup.Addon>{<FaUser />}</InputGroup.Addon>
        <FormControl type="text" placeholder="Username" />
      </InputGroup>
    </FormGroup>

    <FormGroup controlId="formPassword">
      <InputGroup>
        <InputGroup.Addon>{<FaLock />}</InputGroup.Addon>
        <FormControl type="password" placeholder="Password" />
      </InputGroup>
    </FormGroup>

    <FormGroup>
      <Button bsStyle="primary" type="submit" style={{ marginTop: 15 }}>
        Sign in
      </Button>
    </FormGroup>
  </Form>
);

export default LoginForm;
