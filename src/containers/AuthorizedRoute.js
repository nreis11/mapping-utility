import React from "react";
import { firebase } from "../firebase";
import { Route, Redirect } from "react-router-dom";

class AuthorizedRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      loggedIn: undefined
    };
  }

  componentWillMount() {
    firebase.auth.onAuthStateChanged(user => {
      this.setState({
        pending: false,
        loggedIn: !!user
      });
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={renderProps => {
          if (this.state.pending) return null;
          return this.state.loggedIn ? (
            <Component {...renderProps} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: renderProps.location }
              }}
            />
          );
        }}
      />
    );
  }
}

export default AuthorizedRoute;
