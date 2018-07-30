import React, { Component } from "react";

import MainContainer from "./containers/MainContainer";
import { Login, PrivateRoute } from "./containers/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={MainContainer} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
