import React from "react";
import { Route, Redirect } from "react-router-dom";
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

import "./Login.css";
import Logo from "../equest-logo-black.png";
import User from "react-icons/lib/fa/user";
import Password from "react-icons/lib/fa/lock";

const isAuthenticated = () => {
  let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return new Date().getTime() < expiresAt;
};

const checkAuth = {
  isAuthenticated: isAuthenticated() || false,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb();
  }
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      showAlert: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSession = this.setSession.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userNameValue = document.getElementById("formUsername").value;
    const passWordValue = document.getElementById("formPassword").value;
    // Yes it's in plain text. No, I'm not worried. Nothing sensitive here.
    if (userNameValue === "test" && passWordValue === "test") {
      this.setSession();
      checkAuth.authenticate(() => {
        this.setState({
          redirectToReferrer: true
        });
      });
    } else {
      this.setState({
        showAlert: true
      });
    }
  }

  setSession() {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(3600 + new Date().getTime());
    localStorage.setItem("expires_at", expiresAt);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, showAlert } = this.state;

    if (redirectToReferrer) {
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
            {showAlert && (
              <Alert bsStyle="danger" style={{ fontSize: 12 }}>
                Invalid username/password.
              </Alert>
            )}
            <Form id="loginForm" onSubmit={this.handleSubmit}>
              <FormGroup controlId="formUsername">
                <InputGroup>
                  <InputGroup.Addon>{<User />}</InputGroup.Addon>
                  <FormControl type="text" placeholder="Username" />
                </InputGroup>
              </FormGroup>

              <FormGroup controlId="formPassword">
                <InputGroup>
                  <InputGroup.Addon>{<Password />}</InputGroup.Addon>
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
