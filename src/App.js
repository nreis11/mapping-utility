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
          title: "Parent",
          expanded: true,
          children: [{ id: 2, title: "Child" }]
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
      activeExtNode: {},
      options: {
        outputParents: false,
        parentsSelectable: false
      },
      highlightMissingMaps: false
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTreeData = this.getTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSpaceBar = this.handleSpaceBar.bind(this);
    this.highlightMissingMaps = this.highlightMissingMaps.bind(this);
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
    console.log("HANDLING CLICK", node);
    const activeKey =
      treeKey === "intTreeData" ? "activeIntNode" : "activeExtNode";
    const activeNode = node;
    this.setState({
      [activeKey]: activeNode
    });
  }

  handleOptionChange(event) {
    const optionKey = event.target.name;
    const options = { ...this.state.options };
    options[optionKey] = event.target.checked;
    this.setState({ options });
  }

  highlightMissingMaps() {
    console.log("Handling Missing maps");
    this.setState(prevState => ({
      highlightMissingMaps: !prevState.highlightMissingMaps
    }));
  }

  handleSpaceBar(event) {
    // Map the internal node to the external node
    const activeIntNode = this.state.activeIntNode;
    const activeExtNode = this.state.activeExtNode;
    const parentsSelectable = this.state.options["parentsSelectable"];

    // Don't allow if parents aren't selectable and selected node is a parent
    if (event.keyCode === 32 && !parentsSelectable && activeExtNode.children) {
      alert("MAPPING NOT ALLOWED");
      return;
    }

    // Only handle if both an internal and external node are selected
    if (event.keyCode === 32 && activeIntNode.id && activeExtNode.id) {
      event.preventDefault();
      console.log("HANDLING SPACE: ", event.keyCode);
      activeIntNode.mapping = activeExtNode.id;
      const intTreeData = [...this.state.intTreeData];
      const intNodeIndex = intTreeData.findIndex(
        node => node.id === activeIntNode.id
      );
      intTreeData[intNodeIndex] = activeIntNode;
      let newActiveNode = intTreeData[intNodeIndex + 1];
      this.setState({
        intTreeData,
        activeIntNode: newActiveNode
      });
    }
  }

  handleChange(treeData, treeKey) {
    this.setState({
      [treeKey]: treeData
    });
  }

  render() {
    const intTreeKey = "intTreeData";
    const extTreeKey = "extTreeData";
    const internalName = "eQuest";
    const externalName = "Board";
    const mappedId = this.state.activeIntNode.mapping;
    const mappedNode = this.state.extTreeData.find(
      node => node.id === mappedId
    );
    const highlightMissingMaps = this.state.highlightMissingMaps;

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
                <Header name={externalName} />
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
                highlightMissingMaps={highlightMissingMaps}
              />
              <ActionBar
                intKeyName={intTreeKey}
                extKeyName={extTreeKey}
                onHighlightMissingMaps={this.highlightMissingMaps}
                expandAll={this.expandAll}
              />
              <TreeContainer
                treeKey={extTreeKey}
                treeData={this.state.extTreeData}
                onChange={this.handleChange}
                handleNodeClick={this.handleNodeClick}
                activeNode={this.state.activeExtNode}
              />
              <NodeInfo
                heading={internalName}
                node={this.state.activeIntNode}
              />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"Mapped to:"} node={mappedNode} />
              <NodeInfo
                heading={externalName}
                node={this.state.activeExtNode}
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
