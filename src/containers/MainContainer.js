import React, { Component } from "react";
import { Grid, Jumbotron, Row } from "react-bootstrap";
import {
  toggleExpandedForAll,
  addNodeUnderParent,
  getNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";

import {
  getActiveNodeInfo,
  mapNode,
  modifyNodeAtPath,
  exportMappingsToXML,
  isABootstrapModalOpen
} from "../mappingHelpers";

import {
  saveToJson,
  getTreeData,
  getTreeDataFromFlatData
} from "../fileHelpers";

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
import NavBarContainer from "./NavBarContainer";
import NavBar from "../components/NavBarContainer/NavBar";

const getNodeKey = ({ node }) => node.id;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intTreeData: getTreeData("categories"),
      extTreeData: [
        // {
        //   id: 100,
        //   title: "Parent",
        //   expanded: true,
        //   children: [{ id: 999, title: "Child" }]
        // }
      ],
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
    this.handleChange = this.handleChange.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.handleSelectNode = this.handleSelectNode.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.highlightUnmapped = this.highlightUnmapped.bind(this);
    this.handleAddNodes = this.handleAddNodes.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFocusChange = this.handleSearchFocusChange.bind(this);
    this.handleSearchFinish = this.handleSearchFinish.bind(this);
    this.handleSearchOptionChange = this.handleSearchOptionChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  componentDidMount() {
    // Set first node as selected
    const activeNode = getActiveNodeInfo(this.state.intTreeData, 0);
    this.handleSelectNode(activeNode, this.intTreeKey);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUnMount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  expandAll(expanded, isInternal) {
    const treeKey = isInternal ? this.intTreeKey : this.extTreeKey;
    const treeData = this.state[treeKey];
    this.setState({
      [treeKey]: toggleExpandedForAll({
        treeData,
        expanded
      })
    });
  }

  handleTypeSelect(name) {
    const newTreeData = getTreeData(name);
    // Reset active node
    const activeIntNodeInfo = getActiveNodeInfo(this.state.intTreeData, 0);
    this.setState({
      activeType: name,
      intTreeData: newTreeData,
      activeIntNodeInfo
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
      this.setState(
        {
          extTreeData: this.state.extTreeData.concat(...newNodes)
        },
        // Get first node
        () => {
          const activeNode = getActiveNodeInfo(this.state.extTreeData, 0);
          this.handleSelectNode(activeNode, this.extTreeKey);
        }
      );
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
      options: { parentsSelectable },
      searchInternal
    } = this.state;

    // Ignore if search field in focus except for ESC, if bootstrap modal is open, or
    // no ext tree data
    if (
      (document.activeElement.id === "searchInput" && e.keyCode !== 27) ||
      isABootstrapModalOpen() ||
      extTreeData.length < 1
    ) {
      return;
    }

    const keyboard = [
      32, // space,
      46, // del,
      70, // F
      71, // G
      8, // backspace
      27 // esc
    ];

    // Can handle key or command from action bar click
    const key = e.keyCode || null;
    const cmd = e.target.dataset.cmd || null;
    if (keyboard.includes(key) || cmd) {
      e.preventDefault();
    } else {
      return;
    }

    // Get the current tree index
    let treeIndex = activeIntNodeInfo ? activeIntNodeInfo.treeIndex : null;
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : null;
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : null;
    let newNode;
    const nodeCount = getVisibleNodeCount({ treeData: intTreeData });

    // Handle focus
    if (key === 27) {
      // console.log("ESC");
      document.activeElement.blur();
      return;
    } else if (e.ctrlKey && key === 70) {
      // console.log("CTRL + F");
      // Autocomplete search field with active node title
      const activeIntNodeTitle = activeIntNode ? activeIntNode.title : null;
      const activeExtNodeTitle = activeExtNode ? activeExtNode.title : null;
      const searchStr = searchInternal
        ? activeExtNodeTitle
        : activeIntNodeTitle;
      this.handleSearch(searchStr);
      document.getElementById("searchInput").focus();
      return;
    }

    // Halt if either node isn't selected
    if (!activeIntNodeInfo || !activeExtNodeInfo) {
      alert("Please select a node from each tree.");
      return;
    }

    if (
      !parentsSelectable &&
      activeExtNodeInfo &&
      activeExtNodeInfo.node.children
    ) {
      alert("Parents aren't seletable");
      return;
    }

    // Handle actions
    if ((e.shiftKey && key === 32) || cmd === "shift-space") {
      // "Select node and its children. Preserve existing mappings"
      newNode = mapNode([activeIntNode], activeExtNodeInfo.path, false);
      treeIndex += 1;
    } else if ((e.ctrlKey && key === 32) || cmd === "ctrl-space") {
      // "Select node and its children. Overwrite any existing mappings."
      newNode = mapNode([activeIntNode], activeExtNodeInfo.path, true);
      treeIndex += 1;
    } else if (e.shiftKey && key === 8) {
      // console.log("SHIFT BACKSPACE");
      // "Delete current node & everything under that node, then move up to the previous node."
      newNode = mapNode([activeIntNode], null, true);
      treeIndex -= 1;
    } else if (key === 32 || cmd === "space") {
      // "Map single node"
      activeIntNode.mapping = activeExtNodeInfo.path;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if (key === 46 || cmd === "delete") {
      // "DELETE: Delete current node mapping and move down to the next node."
      activeIntNode.mapping = null;
      newNode = activeIntNode;
      treeIndex += 1;
    } else if ((e.shiftKey && key === 46) || cmd === "shift-delete") {
      // "SHIFT DELETE: Delete current node & everything under that node, then move down to the next node."
      newNode = mapNode([activeIntNode], null, true);
      treeIndex += 1;
    } else if (key === 8) {
      // "BACKSPACE Delete current node mapping and move up to the previous node."
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
    const newactiveIntNodeInfo = getActiveNodeInfo(intTreeData, treeIndex);

    // Scroll active node into view
    const activeNodeElem = document.getElementById(
      newactiveIntNodeInfo.node.id
    );

    if (activeNodeElem) {
      activeNodeElem.scrollIntoView(false);
    }

    this.handleSelectNode(newactiveIntNodeInfo, this.intTreeKey);
  }

  handleSearch(searchString) {
    this.setState({
      searchString
    });
  }

  handleSearchFocusChange(newIdx) {
    this.setState({
      searchFocusIndex: newIdx
    });
  }

  handleSearchFinish(matches) {
    const searchFocusIndex = this.state.searchFocusIndex;
    const newActiveNodeInfo = matches[searchFocusIndex] || null;
    const activeNodeKey = this.state.searchInternal
      ? "activeIntNodeInfo"
      : "activeExtNodeInfo";
    this.setState({
      searchFoundCount: matches.length,
      searchFocusIndex:
        matches.length > 0 ? searchFocusIndex % matches.length : 0,
      [activeNodeKey]: newActiveNodeInfo
    });
  }

  handleSearchOptionChange(event) {
    const { name, checked } = event.target;
    // Needed to setTimeout to reflect changes visually. Why...?
    window.setTimeout(() => {
      this.setState({
        [name]: checked
      });
    }, 0);
  }

  handleFileInputChange(fileInput) {
    // Handle open file
    const fileReader = new FileReader();
    fileReader.readAsText(fileInput);
    fileReader.onload = e => {
      // Convert string result to JSON after loading
      const jsonObj = JSON.parse(e.target.result);
      const { intFlatData, extFlatData, options, activeType } = jsonObj;
      this.setState({
        intTreeData: getTreeDataFromFlatData(intFlatData),
        extTreeData: getTreeDataFromFlatData(extFlatData),
        options,
        activeType
      });
    };
  }

  handleSave() {
    const { intTreeData, extTreeData, options, activeType } = this.state;
    saveToJson({ intTreeData, extTreeData, options, activeType });
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
      searchInternal
    } = this.state;

    const internalName = "eQuest";
    const externalName = "Board";
    const activeIntNode = activeIntNodeInfo ? activeIntNodeInfo.node : null;
    const activeExtNode = activeExtNodeInfo ? activeExtNodeInfo.node : null;
    const intSearchString = searchInternal ? searchString : "";
    const extSearchString = searchInternal ? "" : searchString;
    let mappedNode = null;
    if (activeIntNode && activeIntNode.mapping) {
      mappedNode = getNodeAtPath({
        treeData: extTreeData,
        path: activeIntNode.mapping,
        getNodeKey
      }).node;
    }

    return (
      <div id="main-container">
        <NavBarContainer>
          <NavBar
            searchString={searchString}
            handleSearch={this.handleSearch}
            searchFocusIndex={searchFocusIndex}
            searchFoundCount={searchFoundCount}
            onSearchFocusChange={this.handleSearchFocusChange}
            onSearchOptionChange={this.handleSearchOptionChange}
            searchInternal={searchInternal}
            onSave={this.handleSave}
            handleFileInputChange={this.handleFileInputChange}
          />
        </NavBarContainer>
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
                    onAddNodes={this.handleAddNodes}
                  />
                </EditModal>
              </HeaderSmallContainer>
            </HeaderContainer>

            <Row className="show-grid">
              <TreeContainer
                treeKey={this.intTreeKey}
                treeData={intTreeData}
                onChange={this.handleChange}
                onSelectNode={this.handleSelectNode}
                activeNodeInfo={activeIntNodeInfo}
                searchString={intSearchString}
                searchFocusIndex={searchFocusIndex}
                onSearchFinish={searchInternal && this.handleSearchFinish}
                highlightUnmapped={highlightUnmapped}
              />
              <ActionBar
                onHighlightUnmapped={this.highlightUnmapped}
                expandAll={this.expandAll}
                onClick={this.handleKeyDown}
              />
              <TreeContainer
                treeKey={this.extTreeKey}
                treeData={extTreeData}
                onChange={this.handleChange}
                onSelectNode={this.handleSelectNode}
                activeNodeInfo={activeExtNodeInfo}
                searchString={extSearchString}
                searchFocusIndex={searchFocusIndex}
                onSearchFinish={!searchInternal && this.handleSearchFinish}
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
