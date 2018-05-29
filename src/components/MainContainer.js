import React, { Component } from "react";
import { Grid, Jumbotron, Row } from "react-bootstrap";
import { getTreeFromFlatData, toggleExpandedForAll } from "react-sortable-tree";

import HeaderRow from "./HeaderRow";
import TreeContainer from "./TreeContainer";
import ActionBar from "./ActionBar";
import NodeInfo from "./NodeInfo";

import { categories, industries, states, countries } from "../values/eqValues";

const initialData = {
  categories: categories,
  industries: industries,
  states: states,
  countries: countries
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: this.getTreeData("categories"),
      extTreeData: [
        {
          id: 1,
          title: "Parent",
          expanded: true,
          children: [{ id: 2, title: "Child" }]
        }
      ],
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
    this.handleAddNodesToExtTree = this.handleAddNodesToExtTree.bind(this);
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

  handleTypeSelect(name) {
    // Implement a check to see if mapping has occured before changing type
    const newTreeData = this.getTreeData(name);
    this.setState({
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
      event.preventDefault();
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

  handleAddNodesToExtTree(newNodes) {
    console.log("HANDLING ADD");
    this.setState(state => ({
      extTreeData: state.extTreeData.concat(...newNodes)
    }));
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
    const extTreeData = this.state.extTreeData;
    const options = this.state.options;

    return (
      <Jumbotron>
        <Grid fluid>
          <HeaderRow
            internalName={internalName}
            handleTypeSelect={this.handleTypeSelect}
            externalName={externalName}
            extTreeKey={extTreeKey}
            extTreeData={extTreeData}
            options={options}
            handleChange={this.handleChange}
            handleOptionChange={this.handleOptionChange}
            handleAddNodesToExtTree={this.handleAddNodesToExtTree}
          />

          <Row className="show-grid">
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
          </Row>
          <Row className="show-grid">
            <NodeInfo heading={internalName} node={this.state.activeIntNode} />
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
    );
  }
}

export default MainContainer;