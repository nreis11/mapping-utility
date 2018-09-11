import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import "./MainContainer.css";
import {
  toggleExpandedForAll,
  getNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";

import {
  _getActiveNodeInfo,
  _sortTree,
  _changeNodeAtPath,
  _exportMappingsToXML,
  _handleDeleteAction,
  _handleMapAction,
  _handleSearchAction
} from "../utilities/mappingHelpers";

import {
  isABootstrapModalOpen,
  bothNodesAreSelected,
  scrollIfNeeded,
  getInBoundsTreeIndex,
  parentsAreNotSelectable
} from "../utilities/helpers";

import {
  saveToJson,
  getInitialTreeData,
  getTreeDataFromFlatData,
  getFlatData
} from "../utilities/fileHelpers";

import HeaderContainer from "../containers/HeaderContainer";
import TreeContainer from "./TreeContainer";
import ActionBarContainer from "./ActionBarContainer";
import NodeInfo from "../components/MainContainer/NodeInfo";
import HeaderSmallContainer from "../components/HeaderContainer/HeaderSmallContainer";
import ExportModal from "../components/modals/ExportModal";
import Header from "../components/HeaderContainer/Header";
import EditModal from "../components/modals/EditModal";
import Options from "../components/HeaderContainer/Options";
import TypeSelector from "../components/HeaderContainer/TypeSelector";
import OptionsContainer from "./OptionsContainer";
import NavBar from "../components/NavBarContainer/NavBar";

const getNodeKey = ({ node }) => node.id;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: getInitialTreeData(),
      extTreeData: {},
      boardName: "Board",
      activeIntNodeInfo: null,
      activeExtNodeInfo: null,
      activeType: "categories",
      options: {
        outputParents: false,
        parentsSelectable: false
      },
      highlightUnmapped: false,
      searchString: "",
      searchFocusIndex: 0,
      searchFoundCount: null,
      searchInternal: false
    };

    this.intTreeKey = "intTreeData";
    this.extTreeKey = "extTreeData";
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleTreeChange = this.handleTreeChange.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.handleSelectNode = this.handleSelectNode.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.highlightUnmapped = this.highlightUnmapped.bind(this);
    this.handleAddNodes = this.handleAddNodes.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchFinish = this.handleSearchFinish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.resetTrees = this.resetTrees.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  componentDidMount() {
    // Create extTreeData keys based on intTreeData
    const { intTreeData } = this.state;
    const extTreeData = {};
    Object.keys(intTreeData).forEach(type => (extTreeData[type] = []));
    this.setState({
      extTreeData
    });

    // Check if local storage is accessible
    let localStorage;
    try {
      localStorage = window.localStorage;
    } catch (e) {
      console.log(e);
    }

    const localStorageRef = JSON.parse(
      localStorage.getItem("mappingUtilityState")
    );
    // Check if save state in local storage
    if (localStorage && localStorageRef) {
      this.setState({
        ...localStorageRef
      });
    }

    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate() {
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    // Saving as treeData, not flatData to avoid multiple conversions.
    const jsonStr = JSON.stringify({
      ...this.state
    });
    try {
      // Long lists can hit localStorage max.
      localStorage.setItem("mappingUtilityState", jsonStr);
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  expandAll(expanded, isInternal) {
    const treeKey = isInternal ? this.intTreeKey : this.extTreeKey;
    const { activeType } = this.state;
    const treeData = this.state[treeKey];
    const toggledActiveTreeData = toggleExpandedForAll({
      treeData: treeData[activeType],
      expanded
    });
    const newTreeData = { ...treeData, [activeType]: toggledActiveTreeData };
    this.setState({
      [treeKey]: newTreeData
    });
  }

  handleTypeSelect(type) {
    const newActiveTreeData = this.state.intTreeData[type];
    // Reset active node
    this.setState({
      activeType: type,
      activeIntNodeInfo: _getActiveNodeInfo(newActiveTreeData, 0)
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
    event.target.blur();
    const optionKey = event.target.name;
    const options = { ...this.state.options };
    options[optionKey] = event.target.checked;
    this.setState({ options });
  }

  highlightUnmapped() {
    this.setState(prevState => ({
      highlightUnmapped: !prevState.highlightUnmapped
    }));
    this.expandAll(true, true);
  }

  handleAddNodes(newNodes) {
    let newFlatData;
    const { activeType, extTreeData } = this.state;
    // Check if values already exist
    if (extTreeData[activeType]) {
      const extFlatData = getFlatData(extTreeData[activeType]);
      newFlatData = _sortTree(extFlatData.concat(newNodes));
    } else {
      newFlatData = _sortTree(newNodes);
    }
    extTreeData[activeType] = getTreeDataFromFlatData(newFlatData);
    this.setState(
      {
        extTreeData
      },
      // Callback. Get first node
      () => {
        this.expandAll(true, false);
        const activeNode = _getActiveNodeInfo(extTreeData[activeType], 0);
        this.handleSelectNode(activeNode, this.extTreeKey);
      }
    );
  }

  handleTreeChange(treeData, treeKey) {
    const currTreeData = this.state[treeKey];
    const { activeType } = this.state;
    const newTreeData = { ...currTreeData, [activeType]: treeData };
    // Reset all trees if clear all on ext tree
    if (treeKey === this.extTreeKey && !treeData.length) {
      this.resetTrees();
    } else {
      this.setState({
        [treeKey]: newTreeData
      });
    }
  }

  resetTrees() {
    // Clear ext tree, reset int tree with default node selected

    const { activeType } = this.state;
    const newTreeData = getInitialTreeData();
    const activeNodeInfo = _getActiveNodeInfo(newTreeData[activeType], 0);

    this.setState({
      extTreeData: {},
      intTreeData: newTreeData,
      activeExtNodeInfo: null,
      activeIntNodeInfo: activeNodeInfo
    });
  }

  handleExport() {
    const {
      intTreeData,
      extTreeData,
      options: { outputParents }
    } = this.state;
    return _exportMappingsToXML({
      intTreeData,
      extTreeData,
      outputParents
    });
  }

  handleKeyDown(e) {
    const {
      intTreeData,
      extTreeData,
      activeType,
      activeIntNodeInfo,
      activeExtNodeInfo,
      options: { parentsSelectable }
    } = this.state;

    // Ignore if any input is in focus, if bootstrap modal is open, or
    // no ext tree data
    if (
      document.activeElement.nodeName === "INPUT" ||
      isABootstrapModalOpen() ||
      !extTreeData[activeType].length
    ) {
      return;
    }

    const activeIntTreeData = intTreeData[activeType];
    let treeIndex = activeIntNodeInfo ? activeIntNodeInfo.treeIndex : null;
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : null;
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : null;
    const nodeCount = getVisibleNodeCount({ treeData: activeIntTreeData });
    let newNode;

    const mapKeys = [
      32, // space,
      "shift-space",
      "ctrl-space",
      "space"
    ];

    const deleteKeys = [
      46, // del,
      8, // backspace
      "delete",
      "shift-delete"
    ];

    const searchKeys = [
      70, // F
      71 // G,
    ];

    // Can handle key or command from action bar click
    const key = e.keyCode || e.target.dataset.cmd || null;
    if (mapKeys.includes(key)) {
      // handle mapping actions
      e.preventDefault();
      const bothNodesAlert = "Please select a node from each tree.";
      const parentsAlert = "Parents are not selectable.";

      if (!bothNodesAreSelected(activeIntNodeInfo, activeExtNodeInfo)) {
        alert(bothNodesAlert);
        return;
      }

      if (parentsAreNotSelectable(parentsSelectable, activeExtNode)) {
        alert(parentsAlert);
        return;
      }

      const path = activeExtNodeInfo.path;
      const nodeInfo = _handleMapAction({
        e,
        activeIntNode,
        path,
        treeIndex
      });
      newNode = nodeInfo.newNode;
      treeIndex = nodeInfo.treeIndex;
    } else if (deleteKeys.includes(key)) {
      // handle delete actions
      e.preventDefault();
      const nodeInfo = _handleDeleteAction({
        e,
        activeIntNode,
        treeIndex
      });
      newNode = nodeInfo.newNode;
      treeIndex = nodeInfo.treeIndex;
    } else if ((e.ctrlKey || e.metaKey) && searchKeys.includes(key)) {
      e.preventDefault();
      const searchValues = _handleSearchAction({
        e,
        activeIntNode,
        activeExtNode
      });
      this.setState({
        searchInternal: searchValues.searchInternal,
        searchString: searchValues.searchString
      });
      document.getElementById("searchInput").focus();
      return;
    } else {
      // Ignore other input
      return;
    }

    // Unfocus buttons once clicked
    if (e.target.dataset.cmd) {
      e.target.blur();
    }

    // Replace active node with new mapping
    const { path } = activeIntNodeInfo;
    const newTreeData = _changeNodeAtPath(activeIntTreeData, path, newNode);
    this.handleTreeChange(newTreeData, this.intTreeKey);

    // Check bounds
    treeIndex = getInBoundsTreeIndex(treeIndex, nodeCount);

    // Set the new active node
    const newActiveIntNodeInfo = _getActiveNodeInfo(
      activeIntTreeData,
      treeIndex
    );

    // Scroll active node into view if needed
    scrollIfNeeded(newActiveIntNodeInfo.node.id);
    this.handleSelectNode(newActiveIntNodeInfo, this.intTreeKey);
  }

  handleInputChange(event) {
    // Handle multiple input changes e.g. searchInput, searchFocus, boardName
    const {
      target,
      target: { name }
    } = event;
    let value = target.type === "checkbox" ? target.checked : target.value;

    // This needs to be converted to int
    value = name === "searchFocusIndex" ? parseInt(value, 10) : value;

    this.setState({
      [name]: value
    });
  }

  handleSearchFinish(matches) {
    const searchFocusIndex = this.state.searchFocusIndex;
    const newActiveNodeInfo = matches[searchFocusIndex] || null;
    const activeNodeKey = this.state.searchInternal
      ? "activeIntNodeInfo"
      : "activeExtNodeInfo";
    // Only update active node if there is a match
    if (newActiveNodeInfo) {
      this.setState({
        [activeNodeKey]: newActiveNodeInfo
      });
    }
    this.setState({
      searchFoundCount: matches.length,
      searchFocusIndex:
        matches.length > 0 ? searchFocusIndex % matches.length : 0
    });
  }

  handleOpen(fileInput) {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      // Convert string result to JSON after loading
      const savedState = JSON.parse(e.target.result);
      this.setState({
        ...savedState
      });
    };
    fileReader.readAsText(fileInput);
  }

  handleSave() {
    // Save state to JSON
    saveToJson(this.state);
  }

  render() {
    const {
      intTreeData,
      extTreeData,
      options,
      activeType,
      activeIntNodeInfo,
      activeExtNodeInfo,
      highlightUnmapped,
      searchString,
      searchFocusIndex,
      searchFoundCount,
      searchInternal,
      boardName
    } = this.state;

    console.log("RENDERED");

    const internalName = "eQuest";
    const activeIntTreeData = intTreeData[activeType];
    const activeExtTreeData = extTreeData[activeType] || [];
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : null;
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : null;
    const intSearchString = searchInternal ? searchString : "";
    const extSearchString = searchInternal ? "" : searchString;
    const searchValues = {
      searchString,
      searchFocusIndex,
      searchFoundCount,
      handleInputChange: this.handleInputChange,
      searchInternal
    };
    let mappedNode = null;
    if (activeIntNode && activeIntNode.mapping) {
      mappedNode = getNodeAtPath({
        treeData: activeExtTreeData,
        path: activeIntNode.mapping,
        getNodeKey
      }).node;
    }

    return (
      <div id="main-container">
        <NavBar
          searchValues={searchValues}
          handleSave={this.handleSave}
          handleOpen={this.handleOpen}
        />
        <Grid fluid>
          <HeaderContainer>
            <HeaderSmallContainer>
              <Header name={internalName} isInternal={true} />
              <TypeSelector
                onSelect={this.handleTypeSelect}
                activeType={activeType}
                treeData={intTreeData}
              />
            </HeaderSmallContainer>
            <HeaderSmallContainer mdOffset={2}>
              <Header
                name={boardName}
                handleInputChange={this.handleInputChange}
              />
              <EditModal>
                <TreeContainer
                  treeKey={this.extTreeKey}
                  treeData={activeExtTreeData}
                  onChange={this.handleTreeChange}
                  editMode={true}
                  onAddNodes={this.handleAddNodes}
                />
              </EditModal>
            </HeaderSmallContainer>
          </HeaderContainer>
          <Row className="show-grid tree-row">
            <TreeContainer
              treeKey={this.intTreeKey}
              treeData={activeIntTreeData}
              onChange={this.handleTreeChange}
              onSelectNode={this.handleSelectNode}
              activeNodeInfo={activeIntNodeInfo}
              searchString={intSearchString}
              searchFocusIndex={searchFocusIndex}
              onSearchFinish={searchInternal && this.handleSearchFinish}
              highlightUnmapped={highlightUnmapped}
            />
            <ActionBarContainer
              onHighlightUnmapped={this.highlightUnmapped}
              expandAll={this.expandAll}
              onClick={this.handleKeyDown}
            />
            <TreeContainer
              treeKey={this.extTreeKey}
              treeData={activeExtTreeData}
              onChange={this.handleTreeChange}
              onSelectNode={this.handleSelectNode}
              activeNodeInfo={activeExtNodeInfo}
              searchString={extSearchString}
              searchFocusIndex={searchFocusIndex}
              onSearchFinish={!searchInternal && this.handleSearchFinish}
            />
          </Row>
          <Row className="show-grid">
            <NodeInfo heading={internalName} node={activeIntNode} />
            <NodeInfo heading={boardName} node={activeExtNode} mdOffset={2} />
          </Row>
          <Row className="show-grid">
            <NodeInfo heading={"Mapped to:"} node={mappedNode} />
            <OptionsContainer
              left={
                <Options
                  options={options}
                  onOptionChange={this.handleOptionChange}
                />
              }
              right={
                <ExportModal
                  handleExport={this.handleExport}
                  boardName={boardName}
                  activeType={activeType}
                />
              }
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MainContainer;
