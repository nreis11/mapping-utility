import React, { Component } from "react";
import "./App.css";
import { Grid, Jumbotron, Row, Col } from "react-bootstrap";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import TreeContainer from "./components/TreeContainer";
import ActionBar from "./components/ActionBar";
import NodeInfo from "./components/NodeInfo";
import ExportButton from "./components/ExportButton";
import TypeSelector from "./components/TypeSelector";
import AddDataButton from "./components/AddDataButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: "",
      extTreeData: "",
      types: [
        { id: 1, name: "Category" },
        { id: 2, name: "Industry" },
        { id: 3, name: "State" },
        { id: 4, name: "Country" }
      ],
      activeType: 1
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
  }

  handleTypeSelect(id) {
    this.setState({
      activeType: id
    });
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <Jumbotron>
          <Grid fluid>
            <Row className="show-grid">
              <Col md={5}>
                <Header name={"eQuest"} />
                <TypeSelector
                  types={this.state.types}
                  activeKey={this.state.activeType}
                  onSelect={this.handleTypeSelect}
                />
              </Col>
              <Col md={5} mdOffset={2}>
                <Header name={"Board"} />
                <AddDataButton />
              </Col>
            </Row>
            <Row className="show-grid">
              <TreeContainer
                internal={true}
                treeData={this.state.intTreeData}
              />
              <ActionBar />
              <TreeContainer
                internal={false}
                treeData={this.state.extTreeData}
              />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"eQuest"} />
            </Row>
            <Row className="show-grid">
              <div style={{ display: "flex", width: "100%" }}>
                <NodeInfo heading={"Mapped to: "} />
                <NodeInfo heading={"Board"} mdSize={4} mdOffsetSize={2} />
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
