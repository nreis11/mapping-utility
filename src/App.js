import React, { Component } from "react";

import MainContainer from "./containers/MainContainer";
import { Login } from "./components/Login/Login";
import AuthorizedRoute from "./components/Login/AuthorizedRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/mapping">
        <Switch>
          <AuthorizedRoute exact path="/" component={MainContainer} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
