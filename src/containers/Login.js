import React from "react";
import { Redirect } from "react-router-dom";
import {
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  Panel,
  Alert,
  InputGroup
} from "react-bootstrap";
import { firebase } from "../firebase";

import "./Login.css";
import Logo from "../equest-logo-black.png";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      error: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Firebase uses email + password account structure
    const userNameValue =
      document.getElementById("formUserName").value + "@equest.com";
    const passWordValue = document.getElementById("formPassword").value;
    firebase.auth
      .signInWithEmailAndPassword(userNameValue, passWordValue)
      .then(() => {
        this.setState({
          redirectToReferrer: true
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, error } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Col>
        <Col style={{ marginTop: 100 }} sm={4} smOffset={4}>
          <Panel id="login-panel">
            <img src={Logo} alt="Logo" />
            <span className="pull-right">
              <strong>For internal use only.</strong>
            </span>
            <hr />
            {error && (
              <Alert bsStyle="danger" style={{ fontSize: 12 }}>
                {error}
              </Alert>
            )}
            <Form id="loginForm" onSubmit={this.handleSubmit}>
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
                <Button
                  bsStyle="primary"
                  type="submit"
                  style={{ marginTop: 15 }}
                >
                  Sign in
                </Button>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Col>
    );
  }
}