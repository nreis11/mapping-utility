import React, { Component } from "react";
import "./App.css";
import { Grid, Jumbotron, Row, Col } from "react-bootstrap";
import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import TreeContainer from "./components/TreeContainer";
import ActionBar from "./components/ActionBar";
import NodeInfo from "./components/NodeInfo";
import ExportButton from "./components/ExportButton";
import TypeSelector from "./components/TypeSelector";
import AddDataButton from "./components/AddDataButton";

import { categories, industries, states, countries } from "./values/eqValues";

const initialData = [categories, industries, states, countries];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: this.getTreeData(),
      extTreeData: [],
      types: [
        { id: 1, name: "categories", label: "Category" },
        { id: 2, name: "industries", label: "Industry" },
        { id: 3, name: "states", label: "State" },
        { id: 4, name: "countries", label: "Country" }
      ],
      activeType: 1
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTreeData = this.getTreeData.bind(this);
  }

  getTreeData(id = 1) {
    const treeData = initialData[id - 1];
    return getTreeFromFlatData({
      flatData: treeData.map(node => ({ ...node, title: node.label })),
      getKey: node => node.id, // resolve a node's key
      getParentKey: node => node.parent, // resolve a node's parent's key
      rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
    });
  }

  handleTypeSelect(id) {
    const type = this.state.types.filter(type => type.id === id);
    // const newTreeData = this.getTreeData(type[0].id);
    const newTreeData = this.getTreeData(type[0].id);
    this.setState({
      activeType: id,
      intTreeData: newTreeData
    });
  }

  handleChange(treeData, internal) {
    console.log("HANDLING CHANGE");
    if (internal) {
      this.setState({
        intTreeData: treeData
      });
    } else {
      this.setState({
        extTreeData: treeData
      });
    }
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
                onChange={this.handleChange}
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
