import React, { Component } from "react";
import { Grid, Jumbotron, Row } from "react-bootstrap";
import {
  getTreeFromFlatData,
  toggleExpandedForAll,
  removeNodeAtPath,
  addNodeUnderParent,
  getNodeAtPath,
  changeNodeAtPath,
  walk
} from "react-sortable-tree";

import HeaderContainer from "../containers/HeaderContainer";
import TreeContainer from "./TreeContainer";
import ActionBar from "../components/TreeContainer/ActionBar";
import NodeInfo from "../components/NodeInfo";
import HeaderSmallContainer from "../components/HeaderContainer/HeaderSmallContainer";
import ExportButton from "../components/HeaderContainer/ExportButton";
import Header from "../components/HeaderContainer/Header";
import EditModal from "../components/modals/EditModal";
import Options from "../components/HeaderContainer/Options";
import TypeSelector from "../components/HeaderContainer/TypeSelector";

import { categories, industries, states, countries } from "../values/eqValues";

class MainContainer extends Component {
  static initialData = {
    categories: categories,
    industries: industries,
    states: states,
    countries: countries
  };

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
      activeIntNodeInfo: {},
      activeExtNodeInfo: {},
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
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  // componentDidMount() {
  //   document.body.addEventListener("keydown", this.handleSpaceBar);
  // }

  // componentDidUnMount() {
  //   document.body.removeEventListener("keydown", this.handleSpaceBar);
  // }

  expandAll(expanded, key) {
    const value = this.state[key];
    this.setState({
      [key]: toggleExpandedForAll({
        treeData: value,
        expanded
      })
    });
  }

  getTreeData(name) {
    const treeData = MainContainer.initialData[name];

    return getTreeFromFlatData({
      flatData: treeData.map(node => ({ ...node })),
      getKey: node => node.id, // resolve a node's key
      getParentKey: node => node.parent, // resolve a node's parent's key
      rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
    });
  }

  handleTypeSelect(name) {
    // Implement a check to see if mapping has occured before changing type
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const currTreeData = this.state.intTreeData;
    // NEED TO FIGURE OUT WHY NOT logging
    const checkForMapping = node => console.log(node);
    // node.mapping ? alert("Mapping found") : console.log("no mapping found");
    walk({
      currTreeData,
      getNodeKey,
      checkForMapping,
      ignoreCollapsed: false
    });
    const newTreeData = this.getTreeData(name);
    this.setState({
      intTreeData: newTreeData
    });
  }

  handleNodeClick(rowInfo, treeKey) {
    const activeKey =
      treeKey === "intTreeData" ? "activeIntNodeInfo" : "activeExtNodeInfo";
    this.setState({
      [activeKey]: rowInfo
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
    const activeIntNodeInfo = this.state.activeIntNodeInfo;
    const activeIntNode = this.state.activeIntNodeInfo.node;
    const activeExtNodeInfo = this.state.activeExtNodeInfo;
    const activeExtNode = this.state.activeExtNodeInfo.node;
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
      const getNodeKey = ({ node }) => node.id;
      const { node, path } = activeIntNodeInfo;
      console.log("HANDLING SPACE: ", event.keyCode);
      const mapping = activeExtNodeInfo;
      const nextIdx = path[path.length - 1] + 1;
      const newPath = [...path.slice(0, -1), nextIdx];
      console.log(newPath);
      const intTreeData = this.state.intTreeData;
      const newActiveNode = getNodeAtPath({
        intTreeData,
        newPath,
        getNodeKey
      });
      console.log(newActiveNode);
      // this.setState(state => ({
      //   intTreeData: changeNodeAtPath({
      //     treeData: state.intTreeData,
      //     path,
      //     getNodeKey,
      //     newNode: { ...node, mapping }
      //   }),
      //   activeIntNodeInfo: { node: newActiveNode, path: newPath }
      // }));
      // intTreeData[intNodeIndex] = activeIntNode;
      // let newActiveNode = intTreeData[intNodeIndex + 1];
      // this.setState({
      //   intTreeData,
      //   activeIntNode: newActiveNode
      // });
    }
  }

  handleAddNodesToExtTree(newNodes, nodeInfo) {
    console.log("HANDLING ADD");
    // If adding children
    if (nodeInfo) {
      const { path } = nodeInfo;
      const getNodeKey = ({ treeIndex }) => treeIndex;
      newNodes.forEach(node => {
        this.setState(state => ({
          extTreeData: addNodeUnderParent({
            treeData: state.extTreeData,
            parentKey: path[path.length - 1],
            expandParent: true,
            getNodeKey,
            newNode: node
          }).treeData
        }));
      });
    } else {
      this.setState(state => ({
        extTreeData: state.extTreeData.concat(...newNodes)
      }));
    }
  }

  handleChange(treeData, treeKey) {
    // Using this to clear tree as well
    this.setState({
      [treeKey]: treeData
    });
  }

  handleRemoveNode(path) {
    // Why doesn't this work?
    // const getNodeKey = ({ node }) => node.id;
    const getNodeKey = ({ treeIndex }) => treeIndex;
    this.setState(state => ({
      extTreeData: removeNodeAtPath({
        treeData: state.extTreeData,
        path,
        getNodeKey
      })
    }));
  }

  handleExport() {
    alert("Handling export");
    // Need to grab intTreeData and ExtTreeData
    // If output parents, need to grab path of mapped mode
  }

  render() {
    const intTreeKey = "intTreeData";
    const extTreeKey = "extTreeData";
    const internalName = "eQuest";
    const externalName = "Board";
    const activeIntNode = this.state.activeIntNodeInfo.node || {};
    const activeExtNode = this.state.activeExtNodeInfo.node || {};
    const mappedNode = activeIntNode.mapping ? activeIntNode.mapping.node : {};
    const highlightMissingMaps = this.state.highlightMissingMaps;
    const { intTreeData, extTreeData, options } = this.state;
    // const getNodeKey = ({ node }) => node.id;

    return (
      <Jumbotron>
        <Grid fluid>
          <HeaderContainer>
            <HeaderSmallContainer>
              <Header name={internalName} />
              <TypeSelector onSelect={this.handleTypeSelect} />
            </HeaderSmallContainer>
            <HeaderSmallContainer mdOffset={2} className={"flex-container"}>
              <Header name={externalName} />
              <EditModal>
                <TreeContainer
                  treeKey={extTreeKey}
                  treeData={extTreeData}
                  onChange={this.handleChange}
                  editMode={true}
                  handleRemoveNode={this.handleRemoveNode}
                  onAddNodes={this.handleAddNodesToExtTree}
                />
              </EditModal>
              <Options
                options={options}
                onOptionChange={this.handleOptionChange}
              />
              <ExportButton handleExport={this.handleExport} />
            </HeaderSmallContainer>
          </HeaderContainer>

          <Row className="show-grid">
            <TreeContainer
              treeKey={intTreeKey}
              treeData={intTreeData}
              onChange={this.handleChange}
              handleNodeClick={this.handleNodeClick}
              activeNode={activeIntNode}
              highlightMissingMaps={highlightMissingMaps}
            />
            <ActionBar
              intKey={intTreeKey}
              extKey={extTreeKey}
              onHighlightMissingMaps={this.highlightMissingMaps}
              expandAll={this.expandAll}
            />
            <TreeContainer
              treeKey={extTreeKey}
              treeData={extTreeData}
              onChange={this.handleChange}
              handleNodeClick={this.handleNodeClick}
              activeNode={activeExtNode}
            />
          </Row>

          <Row className="show-grid">
            <NodeInfo heading={internalName} node={activeIntNode} />
          </Row>
          <Row className="show-grid">
            <NodeInfo heading={"Mapped to:"} node={mappedNode} />
            <NodeInfo
              heading={externalName}
              node={activeExtNode}
              mdOffsetSize={2}
            />
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default MainContainer;
