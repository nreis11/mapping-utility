import React from "react";
import { firebase } from "../../firebase";
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
    this.observer = firebase.auth.onAuthStateChanged(user => {
      this.setState({
        pending: false,
        loggedIn: !!user
      });
    });
  }

  componentWillUnmount() {
    // Unsubscribes auth observer
    this.observer();
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
                pathname: "/mapping/login",
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
