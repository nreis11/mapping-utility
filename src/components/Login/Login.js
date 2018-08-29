import React from "react";
import { Redirect } from "react-router-dom";
import { Col, Panel, Alert } from "react-bootstrap";
import { firebase } from "../../firebase";

import "./Login.css";
import Logo from "../../assets/equest-logo-black.png";
import LoginForm from "./LoginForm";

class Login extends React.Component {
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
    const { from } = this.props.location.state || {
      from: { pathname: "/mapping" }
    };
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
            <LoginForm onSubmit={this.handleSubmit} />
          </Panel>
        </Col>
      </Col>
    );
  }
}

export default Login;
