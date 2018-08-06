import React, { Component } from "react";

import MainContainer from "./containers/MainContainer";
import { Login } from "./containers/Login";
import AuthorizedRoute from "./containers/AuthorizedRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthorizedRoute exact path="/" component={MainContainer} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
