import React, { Component } from "react";

import MainContainer from "./containers/MainContainer";
import { Login } from "./containers/Login";
import AuthorizedRoute from "./containers/AuthorizedRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthorizedRoute exact path="/" component={MainContainer} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
