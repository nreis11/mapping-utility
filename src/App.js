import React, { Component } from 'react';
import './App.css';
import { Grid, Jumbotron, Row, Col } from 'react-bootstrap';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Tree from './components/Tree';
import ActionBar from './components/ActionBar';
import NodeInfo from './components/NodeInfo';
import ExportButton from './components/ExportButton';
import TypeSelector from './components/TypeSelector';
import AddDataButton from './components/AddDataButton';

class App extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <Jumbotron>
          <Grid fluid>
            <Row className="show-grid">
              <Col md={5}>
                <Header 
                  name={'eQuest'}
                  internal={true} />
                <TypeSelector />
              </Col>
              <Col md={5} mdOffset={2}>
                <Header name={'Board'} />
                <AddDataButton />
              </Col>
            </Row>
            <Row className="show-grid">
              <Tree internal={true}/>
              <ActionBar />
              <Tree internal={false}/>
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"eQuest"}
              />
            </Row>
            <Row className="show-grid">
              <div style={{display: "flex", width: "100%"}}>
                <NodeInfo heading={"Mapped to: "}
                />
                <NodeInfo heading={"Board"}
                          mdSize={4}
                          mdOffsetSize={2}
                />
                <ExportButton />
              </div>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
