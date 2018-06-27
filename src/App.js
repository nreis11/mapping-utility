import React, { Component } from "react";

// import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
