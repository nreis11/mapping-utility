import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import TypeSelector from './components/TypeSelector';
import Header from './components/Header';
import Tree from './components/Tree';
import ActionBar from './components/ActionBar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
            <Button className='btn' style={{margin: '10px'}}>Load</Button>
            <Button className='btn' style={{margin: '10px'}}>Save</Button>
        </Navbar>
        <Jumbotron>
          <Grid>
            <Header name={'eQuest'} />
            <div className="col-sm-2"></div>
            <Header name={'Board'} />
            <TypeSelector />
            <div className="container">
              <div className="row">
                <Tree internal={true}/>
                <ActionBar />
                <Tree internal={false}/>
              </div>
            </div> 
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
