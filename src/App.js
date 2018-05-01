import React, { Component } from 'react';
import './App.css';
import { Grid, Jumbotron, Row, Col } from 'react-bootstrap';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Tree from './components/Tree';
import ActionBar from './components/ActionBar';
import NodeInfo from './components/NodeInfo';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
          <Grid style={{margin: "0 5%"}} fluid>
            <Row className="show-grid">
              <Col sm={12} md={5}>
                <Header 
                  name={'eQuest'}
                  internal={true} />
              </Col>
              <Col sm={12} md={2}></Col>
              <Col sm={12} md={5}>
                <Header name={'Board'} />
              </Col>
            </Row>
            <Row className="show-grid">
              <Tree internal={true}/>
              <ActionBar />
              <Tree internal={false}/>
            </Row>
            <Row className="show-grid">
              <NodeInfo />
              <Col sm={12} md={2} />
              <NodeInfo />
            </Row>
            <Row className="show-grid">
              <NodeInfo />
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
