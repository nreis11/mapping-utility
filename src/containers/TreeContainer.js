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
import { FaTrash } from "react-icons/fa";
import { Col, Well } from "react-bootstrap";

import { removeNodeAtPath, getVisibleNodeCount } from "react-sortable-tree";
import { _getActiveNodeInfo } from "../utilities/mappingHelpers";
import SortableTree from "react-sortable-tree";
import AddModal from "../components/modals/AddModal";
import "react-sortable-tree/style.css";

import "./TreeContainer.css";

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
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

    const { treeData, activeNodeInfo, treeKey, onSelectNode } = this.props;
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
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

    // Check if node changed. If it didn't, just update expanded prop
    let newActiveNodeInfo;
    if (initialTreeIndex === treeIndex) {
      activeNodeInfo.node.expanded = expanded;
      newActiveNodeInfo = activeNodeInfo;
    } else {
      newActiveNodeInfo = _getActiveNodeInfo(treeData, treeIndex);
    }
    onSelectNode(newActiveNodeInfo, treeKey);
  }

  handleRemoveNode(path) {
    const { treeData, treeKey, onChange } = this.props;
    const getNodeKey = ({ node }) => node.id;
    const newTreeData = removeNodeAtPath({
      treeData,
      path,
      getNodeKey
    });
    onChange(newTreeData, treeKey);
  }

  renderEditTree() {
    // Only rendered in the edit modal
    const { treeKey, treeData, onChange, onAddNodes } = this.props;

    return (
      <Col md={12}>
        <Well>
          <SortableTree
            treeData={treeData}
            onChange={treeData => onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            generateNodeProps={rowInfo => {
              const { path } = rowInfo;
              const buttons = [
                <AddModal onAddNodes={onAddNodes} nodeInfo={rowInfo} />,
                <button onClick={() => this.handleRemoveNode(path)}>
                  <FaTrash className="react-icons" />
                </button>
              ];

              return {
                buttons: buttons
              };
            }}
          />
        </Well>
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
        <Col md={5} id={`tree-${treeKey}`} onKeyDown={this.handleKeyDown}>
          <Well>
            <SortableTree
              treeData={treeData}
              onChange={treeData => onChange(treeData, treeKey)}
              canDrag={false}
              canDrop={() => false}
              rowHeight={45}
              scaffoldBlockPxWidth={35}
              getNodeKey={({ node }) => node.id}
              searchMethod={customSearchMethod}
              onlyExpandSearchedNodes={true}
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
                node.mapping
                  ? className.push("mapped")
                  : className.push(highlightUnmapped ? "un-mapped" : "");

                return {
                  onClick: () => onSelectNode(rowInfo, treeKey),
                  className: className.join(" "),
                  id: node.id
                };
              }}
            />
          </Well>
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
  onSearchFinish: null,
  searchString: "",
  searchFocusIndex: 0
};

export default TreeContainer;
