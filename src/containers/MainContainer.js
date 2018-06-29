import React, { Component } from "react";
import { Grid, Jumbotron, Row } from "react-bootstrap";
import {
  toggleExpandedForAll,
  addNodeUnderParent,
  getNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";

import HeaderContainer from "../containers/HeaderContainer";
import TreeContainer from "./TreeContainer";
import ActionBar from "../components/TreeContainer/ActionBar";
import NodeInfo from "../components/MainContainer/NodeInfo";
import HeaderSmallContainer from "../components/HeaderContainer/HeaderSmallContainer";
import ExportModal from "../components/modals/ExportModal";
import Header from "../components/HeaderContainer/Header";
import EditModal from "../components/modals/EditModal";
import Options from "../components/HeaderContainer/Options";
import TypeSelector from "../components/HeaderContainer/TypeSelector";
import OptionsContainer from "./OptionsContainer";
import NavBar from "../components/NavBar";

import { categories, industries, states, countries } from "../values/eqValues";
import {
  getTreeDataFromFlatData,
  getActiveNode,
  mapNode,
  modifyNodeAtPath,
  exportMappingsToXML
} from "../helpers";

const keyboard = {
  32: false, // space,
  16: false, // shift,
  17: false, // ctrl
  46: false, // del,
  70: false, // F
  71: false, // G
  8: false // backspace
};

const getNodeKey = ({ node }) => node.id;

class MainContainer extends Component {
  static internalData = {
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
      activeType: "categories",
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
    this.handleAddNodes = this.handleAddNodes.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    // Set first node as selected
    this.setState({
      activeIntNodeInfo: {
        ...getActiveNode(this.state.intTreeData, 0),
        treeIndex: 0
      }
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
    const flatData = MainContainer.internalData[name];
    return getTreeDataFromFlatData(flatData);
  }

  handleTypeSelect(name) {
    const newTreeData = this.getTreeData(name);
    this.setState({
      activeType: name,
      intTreeData: newTreeData
    });
  }

  handleSelectNode(nodeInfo, treeKey) {
    console.log("Node Info", nodeInfo);
    const activeKey =
      treeKey === this.intTreeKey ? "activeIntNodeInfo" : "activeExtNodeInfo";
    this.setState({
      [activeKey]: nodeInfo
    });
  }

  handleOptionChange(event) {
    const optionKey = event.target.name;
    const options = { ...this.state.options };
    options[optionKey] = event.target.checked;
    this.setState({ options });
  }

  highlightUnmapped() {
    this.setState(prevState => ({
      highlightUnmapped: !prevState.highlightUnmapped
    }));
  }

  handleAddNodes(newNodes, nodeInfo) {
    // If adding children
    if (nodeInfo) {
      const { path } = nodeInfo;
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
    this.setState({
      [treeKey]: treeData
    });
  }

  handleExport() {
    const { intTreeData, activeType, options } = this.state;
    return exportMappingsToXML(intTreeData, activeType, options.outputParents);
  }

  handleKeyDown(e) {
    const {
      intTreeData,
      extTreeData,
      activeIntNodeInfo,
      activeExtNodeInfo,
      options
    } = this.state;
    const { parentsSelectable } = options;
    const activeIntNode = activeIntNodeInfo.node;

    // Implement tab to handle tree focus
    const key = e.keyCode || null;
    const cmd = e.target.dataset.cmd || null;
    if (key in keyboard) {
      keyboard[key] = true;
      e.preventDefault();
    } else {
      if (!cmd) {
        return;
      }
    }

    // Halt on no ext data
    if (extTreeData.length < 1) {
      return;
    }

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
    if (keyboard[17] && keyboard[70]) {
      console.log("CTRL + F");
      return;
    } else if ((keyboard[16] && keyboard[32]) || cmd === "shift-space") {
      console.log("SHIFT + SPACE");
      console.log("Select node and its children. Preserve existing mappings.");
      newNode = mapNode([activeIntNode], activeExtNodeInfo.path, false);
      treeIndex += 1;
    } else if ((keyboard[17] && keyboard[32]) || cmd === "ctrl-space") {
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
    } else if (keyboard[32] || cmd === "space") {
      console.log("SPACE");
      console.log("Select single node");
      activeIntNode.mapping = activeExtNodeInfo.path;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if (keyboard[46] || cmd === "delete") {
      console.log(
        "DELETE: Delete current node mapping and move down to the next node."
      );
      activeIntNode.mapping = null;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if ((keyboard[16] && keyboard[46]) || cmd === "shift-delete") {
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

    // Unfocus buttons once clicked
    if (cmd) {
      e.target.blur();
    }

    // Replace active node with new mapping
    const { path } = activeIntNodeInfo;
    const newTreeData = modifyNodeAtPath(intTreeData, path, newNode);
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
      activeType,
      activeIntNodeInfo,
      activeExtNodeInfo,
      highlightUnmapped
    } = this.state;
    const internalName = "eQuest";
    const externalName = "Board";
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : null;
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : null;
    let mappedNode = null;
    if (activeIntNode) {
      mappedNode = activeIntNode.mapping
        ? getNodeAtPath({
            treeData: extTreeData,
            path: activeIntNode.mapping,
            getNodeKey: ({ node }) => node.id
          }).node
        : {};
    }

    return (
      <div>
        <NavBar />
        <Jumbotron>
          <Grid fluid>
            <HeaderContainer>
              <HeaderSmallContainer>
                <Header name={internalName} />
                <TypeSelector
                  onSelect={this.handleTypeSelect}
                  activeType={activeType}
                  treeData={intTreeData}
                />
              </HeaderSmallContainer>
              <HeaderSmallContainer mdOffset={2}>
                <Header name={externalName} />
                <EditModal>
                  <TreeContainer
                    treeKey={this.extTreeKey}
                    treeData={extTreeData}
                    onChange={this.handleChange}
                    editMode={true}
                    handleRemoveNode={this.handleRemoveNode}
                    onAddNodes={this.handleAddNodes}
                  />
                </EditModal>
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
              />
              <ActionBar
                intKey={this.intTreeKey}
                extKey={this.extTreeKey}
                onhighlightUnmapped={this.highlightUnmapped}
                expandAll={this.expandAll}
                onClick={this.handleKeyDown}
              />
              <TreeContainer
                treeKey={this.extTreeKey}
                treeData={extTreeData}
                onChange={this.handleChange}
                handleSelectNode={this.handleSelectNode}
                activeNodeInfo={activeExtNodeInfo}
              />
            </Row>

            <Row className="show-grid">
              <NodeInfo heading={internalName} node={activeIntNode} />
              <NodeInfo
                heading={externalName}
                node={activeExtNode}
                mdOffset={2}
              />
            </Row>
            <Row className="show-grid">
              <NodeInfo heading={"Mapped to:"} node={mappedNode} />
              <OptionsContainer>
                <Options
                  options={options}
                  onOptionChange={this.handleOptionChange}
                />
                <ExportModal handleExport={this.handleExport} />
              </OptionsContainer>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default MainContainer;
