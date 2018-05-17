import React, { Component } from "react";
import "./App.css";
import { Grid, Jumbotron, Row, Col } from "react-bootstrap";
import { getTreeFromFlatData, toggleExpandedForAll } from "react-sortable-tree";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import TreeContainer from "./components/TreeContainer";
import ActionBar from "./components/ActionBar";
import NodeInfo from "./components/NodeInfo";
import ExportButton from "./components/ExportButton";
import TypeSelector from "./components/TypeSelector";
import AddDataButton from "./components/AddDataButton";
import Options from "./components/Options";

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
      activeType: 1,
      internalName: "eQuest",
      activeIntId: "",
      activeBoardId: ""
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTreeData = this.getTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
  }

  expandAll(expanded, keyName) {
    console.log("Expanded: ", expanded);
    const value = this.state[keyName];
    this.setState({
      [keyName]: toggleExpandedForAll({
        treeData: value,
        expanded
      })
    });
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
    const newTreeData = this.getTreeData(type[0].id);
    this.setState({
      activeType: id,
      intTreeData: newTreeData
    });
  }

  handleChange(treeData, keyName) {
    console.log("HANDLING CHANGE");
    this.setState({
      [keyName]: treeData
    });
  }

  render() {
    const intTreeKey = "intTreeData";
    const extTreeKey = "extTreeData";

    return (
      <div className="main">
        <NavBar />
        <Jumbotron>
          <Grid fluid>
            <Row className="show-grid">
              <Col md={5}>
                <Header name={this.state.internalName} />
                <TypeSelector
                  types={this.state.types}
                  activeKey={this.state.activeType}
                  onSelect={this.handleTypeSelect}
                />
              </Col>
              <Col md={5} mdOffset={2} className="flex-container">
                <Header name={"Board"} />
                <AddDataButton />
                <Options />
                <ExportButton />
              </Col>
            </Row>
            <Row className="show-grid">
              <TreeContainer
                keyName={intTreeKey}
                treeData={this.state.intTreeData}
                onChange={this.handleChange}
              />
              <ActionBar
                intKeyName={intTreeKey}
                extKeyName={extTreeKey}
                expandOnClick={this.expandAll}
              />
              <TreeContainer
                keyName={extTreeKey}
                treeData={this.state.extTreeData}
              />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={this.state.internalName} />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"Mapped to: "} />
              <NodeInfo heading={"Board"} mdOffsetSize={2} />
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
