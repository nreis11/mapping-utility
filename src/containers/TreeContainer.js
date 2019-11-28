import React from "react";
import {
  func,
  string,
  arrayOf,
  object,
  bool,
  shape,
  number,
  oneOfType
} from "prop-types";
import { Col } from "react-bootstrap";
import { getInBoundsTreeIndex } from "../utils/helpers";
import { _getActiveNodeInfo, getNodeKey } from "../utils/mappingHelpers";
import SortableTree, {
  removeNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";
import AddModal from "../components/modals/AddModal";
import { FaPlus, FaTrash } from "react-icons/fa";

import "./TreeContainer.css";

class TreeContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false,
      extNodeInfo: null
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
    this.handleShowAddModal = this.handleShowAddModal.bind(this);
    this.handleHideAddModal = this.handleHideAddModal.bind(this);
  }

  componentWillUnmount() {
    const { treeKey } = this.props;
    const tree = document.getElementById(`tree-${treeKey}`);
    tree.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    const keyboard = [
      37, // left,
      38, // up,
      39, // right,
      40 // down,
    ];
    const key = e.keyCode;
    if (!keyboard.includes(key)) {
      return;
    }

    const { treeData, activeNodeInfo, onSelectNode } = this.props;
    let { treeIndex } = activeNodeInfo;
    const initialTreeIndex = treeIndex;
    let expanded = activeNodeInfo.node.expanded;
    const { children } = activeNodeInfo.node;
    const nodeCount = getVisibleNodeCount({ treeData });

    if (key === 38) {
      treeIndex -= 1;
    } else if (key === 40) {
      treeIndex += 1;
    } else if (key === 37) {
      expanded ? (expanded = false) : (treeIndex -= 1);
    } else if (key === 39) {
      expanded ? children && (treeIndex += 1) : (expanded = true);
    }

    // Check bounds
    treeIndex = getInBoundsTreeIndex(treeIndex, nodeCount);

    // Check if node changed. If it didn't, just update expanded prop
    let newActiveNodeInfo;
    if (initialTreeIndex === treeIndex) {
      activeNodeInfo.node.expanded = expanded;
      newActiveNodeInfo = { ...activeNodeInfo };
    } else {
      newActiveNodeInfo = _getActiveNodeInfo(treeData, treeIndex);
    }
    onSelectNode(newActiveNodeInfo);
  }

  handleRemoveNode(path) {
    const { treeData, treeKey, onChange } = this.props;
    const newTreeData = removeNodeAtPath({
      treeData,
      path,
      getNodeKey
    });
    onChange(newTreeData, treeKey);
  }

  handleShowAddModal(nodeInfo) {
    this.setState({
      showAddModal: true,
      extNodeInfo: nodeInfo
    });
  }

  handleHideAddModal() {
    this.setState({
      showAddModal: false,
      extNodeInfo: null
    });
  }

  renderEditTree() {
    // Only rendered in the edit modal
    const { treeKey, treeData, onChange, onAddNodes } = this.props;

    return (
      <Col id="edit-tree-container">
        {this.state.showAddModal && (
          <AddModal
            onAddNodes={onAddNodes}
            show={true}
            onHide={this.handleHideAddModal}
            nodeInfo={this.state.extNodeInfo}
          />
        )}
        <SortableTree
          treeData={treeData}
          onChange={treeData => onChange(treeData, treeKey)}
          className="well"
          style={{ height: "60vh" }}
          canDrag={false}
          canDrop={() => false}
          rowHeight={45}
          scaffoldBlockPxWidth={35}
          getNodeKey={({ node }) => node.id}
          generateNodeProps={nodeInfo => {
            const { path } = nodeInfo;
            const buttons = [
              <button onClick={() => this.handleShowAddModal(nodeInfo)}>
                <FaPlus className="react-icons" />
              </button>,

              <button onClick={() => this.handleRemoveNode(path)}>
                <FaTrash className="react-icons" />
              </button>
            ];

            return {
              buttons: buttons
            };
          }}
        />
      </Col>
    );
  }

  render() {
    const {
      treeKey,
      activeNodeInfo,
      treeData,
      onChange,
      editMode,
      onSelectNode,
      highlightUnmapped,
      searchString,
      searchFocusIndex,
      onSearchFinish
    } = this.props;

    if (editMode) {
      return this.renderEditTree();
    } else {
      const activeNode = activeNodeInfo ? activeNodeInfo.node : null;

      // Case insensitive search of `node.title`
      const customSearchMethod = ({ node, searchQuery }) =>
        searchQuery &&
        node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;

      return (
        <Col
          id={`tree-${treeKey}`}
          className="well"
          onKeyDown={this.handleKeyDown}
        >
          <SortableTree
            treeData={treeData}
            onChange={treeData => onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            searchMethod={customSearchMethod}
            // onlyExpandSearchedNodes={true}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            searchFinishCallback={matches => {
              // Only run if the func is passed through
              // to avoid search overrides
              onSearchFinish && onSearchFinish(matches);
            }}
            generateNodeProps={rowInfo => {
              const { node } = rowInfo;
              const className = [];
              activeNode &&
                activeNode.id === node.id &&
                className.push("active-node");
              node.isInternal && node.mapping
                ? className.push("mapped")
                : className.push(highlightUnmapped ? "un-mapped" : "");

              return {
                onClick: () => onSelectNode(rowInfo),
                className: className.join(" "),
                id: node.id
              };
            }}
          />
        </Col>
      );
    }
  }
}

TreeContainer.propTypes = {
  treeKey: string.isRequired,
  treeData: arrayOf(object).isRequired,
  onChange: func.isRequired,
  onSelectNode: func,
  highlightUnmapped: bool,
  editMode: bool,
  onAddNodes: func,
  activeNodeInfo: shape({
    node: shape({ id: string.isRequired, title: string.isRequired }),
    path: arrayOf(string).isRequired
  }),
  onSearchFinish: oneOfType([func, bool]),
  searchString: string,
  searchFocusIndex: number
};

TreeContainer.defaultProps = {
  editMode: false,
  onAddNodes: null,
  highlightUnmapped: false,
  onSelectNode: null,
  activeNodeInfo: null,
  onSearchFinish: false,
  searchString: "",
  searchFocusIndex: 0
};

export default TreeContainer;
