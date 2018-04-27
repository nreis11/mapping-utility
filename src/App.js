import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import TypeSelector from './components/TypeSelector';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
            <Button>Load</Button>
            <Button>Save</Button>
        </Navbar>
        <Jumbotron>
          <Grid>
            <Header name={'eQuest'} />
            <Header name={'Board'} />
            <TypeSelector /> 
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
