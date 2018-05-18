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

const initialData = {
  categories: categories,
  industries: industries,
  states: states,
  countries: countries
};

const initialType = "categories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: this.getTreeData(initialType),
      extTreeData: [
        {
          id: 1,
          title: "Chicken",
          expanded: true,
          children: [{ id: 2, title: "Egg" }]
        }
      ],
      types: [
        { name: "categories", label: "Category" },
        { name: "industries", label: "Industry" },
        { name: "states", label: "State" },
        { name: "countries", label: "Country" }
      ],
      activeType: initialType,
      activeIntNode: {},
      activeBoardNode: {},
      options: {
        outputParents: false,
        parentsSelectable: false
      }
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTreeData = this.getTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSpaceBar = this.handleSpaceBar.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.handleSpaceBar);
  }

  componentDidUnMount() {
    document.body.removeEventListener("keydown", this.handleSpaceBar);
  }

  expandAll(expanded, keyName) {
    const value = this.state[keyName];
    this.setState({
      [keyName]: toggleExpandedForAll({
        treeData: value,
        expanded
      })
    });
  }

  getTreeData(name = "categories") {
    const treeData = initialData[name];

    return getTreeFromFlatData({
      flatData: treeData.map(node => ({ ...node })),
      getKey: node => node.id, // resolve a node's key
      getParentKey: node => node.parent, // resolve a node's parent's key
      rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
    });
  }

  handleTypeSelect(key) {
    const type = this.state.types.find(type => type.name === key);
    const newTreeData = this.getTreeData(type.name);
    this.setState({
      activeType: key,
      intTreeData: newTreeData
    });
  }

  handleNodeClick(node, treeKey) {
    console.log("HANDLING CLICK, ID: ", node);
    const activeKey =
      treeKey === "intTreeData" ? "activeIntNode" : "activeBoardNode";
    const activeNode = node;
    this.setState({
      [activeKey]: activeNode
    });
  }

  handleOptionChange(event) {
    const optionKey = event.target.name;
    const options = { ...this.state.options };
    options[optionKey] = event.target.checked;
    this.setState({
      options
    });
  }

  handleSpaceBar(event) {
    // Map the internal node to the board node
    const activeIntNode = this.state.activeIntNode;
    const activeBoardNode = this.state.activeBoardNode;
    if (event.keyCode === 32 && activeIntNode.id && activeBoardNode.id) {
      event.preventDefault();
      console.log("HANDLING SPACE: ", event.keyCode);
      activeIntNode.mapping = activeBoardNode.id;
      const intTreeData = { ...this.state.intTreeData };
      // const intNodeIndex = intTreeData.findIndex(
      //   node => node.id === activeIntNode.id
      // );
      console.log(typeof intTreeData);
      // intTreeData[intNodeIndex] = activeIntNode;
      // this.setState({
      //   intTreeData
      // });
    }
    // Grab active internal node
    // Grab active board node
    // Set int node mapping to board node.id

    // Set active int node + 1
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
    const internalName = "eQuest";
    const mappingId = this.state.activeIntNode.mapping;
    const mappedNode = this.state.extTreeData.find(
      node => node.id === mappingId
    );

    return (
      <div className="main">
        <NavBar />
        <Jumbotron>
          <Grid fluid>
            <Row className="show-grid">
              <Col md={5}>
                <Header name={internalName} />
                <TypeSelector
                  types={this.state.types}
                  activeKey={this.state.activeType}
                  onSelect={this.handleTypeSelect}
                />
              </Col>
              <Col md={5} mdOffset={2} className="flex-container">
                <Header name={"Board"} />
                <AddDataButton />
                <Options
                  options={this.state.options}
                  onOptionChange={this.handleOptionChange}
                />
                <ExportButton />
              </Col>
            </Row>
            <Row className="show-grid main-container">
              <TreeContainer
                treeKey={intTreeKey}
                treeData={this.state.intTreeData}
                onChange={this.handleChange}
                handleNodeClick={this.handleNodeClick}
                activeNode={this.state.activeIntNode}
              />
              <ActionBar
                intKeyName={intTreeKey}
                extKeyName={extTreeKey}
                expandOnClick={this.expandAll}
              />
              <TreeContainer
                treeKey={extTreeKey}
                treeData={this.state.extTreeData}
                onChange={this.handleChange}
                handleNodeClick={this.handleNodeClick}
                activeNode={this.state.activeBoardNode}
              />
              <NodeInfo
                heading={internalName}
                node={this.state.activeIntNode}
              />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"Mapped to: "} node={mappedNode} />
              <NodeInfo
                heading={"Board"}
                node={this.state.activeBoardNode}
                mdOffsetSize={2}
              />
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
