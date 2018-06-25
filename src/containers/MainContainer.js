import React, { Component } from "react";
import { Grid, Jumbotron, Row } from "react-bootstrap";
import {
  getTreeFromFlatData,
  toggleExpandedForAll,
  removeNodeAtPath,
  addNodeUnderParent,
  getNodeAtPath,
  changeNodeAtPath,
  walk,
  getVisibleNodeCount
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
import { getActiveNode, mapNode } from "../helpers";

const keyboard = {
  32: false, // space,
  16: false, // shift,
  17: false, // ctrl
  46: false, // del,
  70: false, // F
  71: false, // G
  8: false // backspace
};

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
          id: 100,
          title: "Parent",
          expanded: true,
          children: [{ id: 101, title: "Child" }]
        }
      ],
      activeIntNodeInfo: null,
      activeExtNodeInfo: null,
      options: {
        outputParents: false,
        parentsSelectable: false
      },
      highlightUnmapped: false
    };

    this.intTreeKey = "intTreeData";
    this.extTreeKey = "extTreeData";
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTreeData = this.getTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.handleSelectNode = this.handleSelectNode.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.highlightUnmapped = this.highlightUnmapped.bind(this);
    this.handleAddNodesToExtTree = this.handleAddNodesToExtTree.bind(this);
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    // Set first node as selected
    this.setState({
      activeIntNodeInfo: getActiveNode(this.state.intTreeData, 0)
    });
  }

  expandAll(expanded, key) {
    const treeData = this.state[key];
    this.setState({
      [key]: toggleExpandedForAll({
        treeData: treeData,
        expanded
      })
    });
  }

  getTreeData(name) {
    const treeData = MainContainer.initialData[name];

    return getTreeFromFlatData({
      flatData: treeData.map(node => ({ ...node, expanded: false })),
      getKey: node => node.id, // resolve a node's key
      getParentKey: node => node.parent, // resolve a node's parent's key
      rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
    });
  }

  handleTypeSelect(name) {
    // Implement a check to see if mapping has occured before changing type
    const getNodeKey = ({ node }) => node.id;
    const currTreeData = this.state.intTreeData;
    const checkForMapping = node =>
      node.mapping ? console.log("Mapping found") : null;

    walk({
      treeData: currTreeData,
      getNodeKey,
      callback: checkForMapping,
      ignoreCollapsed: false
    });
    const newTreeData = this.getTreeData(name);
    this.setState({
      intTreeData: newTreeData
    });
  }

  handleSelectNode(rowInfo, treeKey) {
    console.log("Node Info", rowInfo);
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

  highlightUnmapped() {
    console.log("Handling unmapped");
    this.setState(prevState => ({
      highlightUnmapped: !prevState.highlightUnmapped
    }));
  }

  handleAddNodesToExtTree(newNodes, nodeInfo) {
    console.log("HANDLING ADD");
    // If adding children
    if (nodeInfo) {
      const { path } = nodeInfo;
      const getNodeKey = ({ node }) => node.id;
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

  handleChange(treeData, treeKey = this.intTreeKey) {
    // Using this to clear tree as well
    this.setState({
      [treeKey]: treeData
    });
  }

  handleRemoveNode(path) {
    const getNodeKey = ({ node }) => node.id;
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
    // Need to grab intTreeData
    // If output parents, need to grab path of mapped mode
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = true;
      e.preventDefault();
    } else {
      return;
    }

    const {
      intTreeData,
      activeIntNodeInfo,
      activeExtNodeInfo,
      options
    } = this.state;
    const { parentsSelectable } = options;
    const activeIntNode = activeIntNodeInfo.node;

    const getNodeKey = ({ node }) => node.id;

    // Halt if both nodes aren't selected
    if (!activeIntNodeInfo || !activeExtNodeInfo) {
      alert("Please select a node from each tree.");
      return;
    }

    if (!parentsSelectable && activeExtNodeInfo.node.children) {
      alert("Parents aren't seletable");
      return;
    }

    // Get the current tree index
    let { treeIndex } = activeIntNodeInfo;
    let newNode;
    const nodeCount = getVisibleNodeCount({ treeData: intTreeData });

    // Handle actions
    if (keyboard[16] && keyboard[32]) {
      console.log("SHIFT + SPACE");
      console.log("Select node and its children. Preserve existing mappings.");
      newNode = mapNode([activeIntNode], activeExtNodeInfo.path, false);
      treeIndex += 1;
    } else if (keyboard[17] && keyboard[32]) {
      console.log("CTRL + SPACE");
      console.log(
        "Select node and its children. Overwrite any existing mappings."
      );
      newNode = mapNode([activeIntNode], activeExtNodeInfo.path, true);
      treeIndex += 1;
    } else if (keyboard[16] && keyboard[8]) {
      console.log("SHIFT BACKSPACE");
      console.log(
        "Delete current node & everything under that node, then move up to the previous node."
      );
      newNode = mapNode([activeIntNode], null, true);
      treeIndex -= 1;
    } else if (keyboard[32]) {
      console.log("SPACE");
      console.log("Select single node");
      // Get both active nodes
      activeIntNode.mapping = activeExtNodeInfo.path;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if (keyboard[46]) {
      console.log(
        "DELETE: Delete current node mapping and move down to the next node."
      );
      activeIntNode.mapping = null;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if (keyboard[16] && keyboard[46]) {
      console.log(
        "SHIFT DELETE: Delete current node & everything under that node, then move down to the next node."
      );
      newNode = mapNode([activeIntNode], null, true);
      treeIndex += 1;
    } else if (keyboard[8]) {
      console.log(
        "BACKSPACE Delete current node mapping and move up to the previous node."
      );
      activeIntNode.mapping = null;
      newNode = activeIntNode;
      treeIndex -= 1;
    } else {
      return;
    }

    const newTreeData = changeNodeAtPath({
      treeData: intTreeData,
      path: activeIntNodeInfo.path,
      newNode: newNode,
      getNodeKey,
      ignoreCollapsed: true
    });
    this.handleChange(newTreeData, this.intTreeKey);

    // Check bounds
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

    // Set the new active node
    const newactiveIntNodeInfo = getActiveNode(intTreeData, treeIndex);
    // Add treeIndex
    this.handleSelectNode(
      { ...newactiveIntNodeInfo, treeIndex },
      this.intTreeKey
    );
  }

  handleKeyUp(e) {
    const key = e.keyCode;
    if (key in keyboard) {
      keyboard[key] = false;
    }
  }

  render() {
    const {
      intTreeData,
      extTreeData,
      options,
      activeIntNodeInfo,
      activeExtNodeInfo,
      highlightUnmapped
    } = this.state;
    const internalName = "eQuest";
    const externalName = "Board";
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : {};
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : {};
    const mappedNode = activeIntNode.mapping
      ? getNodeAtPath({
          treeData: extTreeData,
          path: activeIntNode.mapping,
          getNodeKey: ({ node }) => node.id
        }).node
      : {};

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
                  treeKey={this.extTreeKey}
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

          <Row
            className="show-grid"
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
          >
            <TreeContainer
              treeKey={this.intTreeKey}
              treeData={intTreeData}
              onChange={this.handleChange}
              handleSelectNode={this.handleSelectNode}
              activeNodeInfo={activeIntNodeInfo}
              highlightUnmapped={highlightUnmapped}
              getActiveNode={getActiveNode}
            />
            <ActionBar
              intKey={this.intTreeKey}
              extKey={this.extTreeKey}
              onhighlightUnmapped={this.highlightUnmapped}
              expandAll={this.expandAll}
            />
            <TreeContainer
              treeKey={this.extTreeKey}
              treeData={extTreeData}
              onChange={this.handleChange}
              handleSelectNode={this.handleSelectNode}
              activeNodeInfo={activeExtNodeInfo}
              getActiveNode={getActiveNode}
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
              mdOffset={2}
            />
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default MainContainer;
