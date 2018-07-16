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
import TrashIcon from "react-icons/lib/fa/trash";
import { Col, Well } from "react-bootstrap";

import { removeNodeAtPath, getVisibleNodeCount } from "react-sortable-tree";
import { getActiveNodeInfo } from "../helpers";
import SortableTree from "react-sortable-tree";
import AddModal from "../components/modals/AddModal";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

import "./TreeContainer.css";

class TreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveNode = this.handleRemoveNode.bind(this);
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
      console.log("UP");
      treeIndex -= 1;
    } else if (key === 40) {
      console.log("DOWN");
      treeIndex += 1;
    } else if (key === 37) {
      console.log("LEFT");
      expanded ? (expanded = false) : (treeIndex -= 1);
    } else if (key === 39) {
      console.log("RIGHT");
      expanded ? children && (treeIndex += 1) : (expanded = true);
    }

    // Check bounds
    treeIndex = treeIndex < 0 ? 0 : treeIndex;
    treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;

    // Check if node changed. If it didn't, just update expanded prop
    let newactiveNodeInfo;
    if (initialTreeIndex === treeIndex) {
      activeNodeInfo.node.expanded = expanded;
      newactiveNodeInfo = activeNodeInfo;
    } else {
      newactiveNodeInfo = getActiveNodeInfo(treeData, treeIndex);
    }
    onSelectNode(newactiveNodeInfo, treeKey);
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
    const { treeKey, treeData, onChange, onAddNodes } = this.props;

    return (
      <Col md={12}>
        <Well className="well">
          <SortableTree
            treeData={treeData}
            onChange={treeData => onChange(treeData, treeKey)}
            canDrag={false}
            canDrop={() => false}
            rowHeight={45}
            scaffoldBlockPxWidth={35}
            getNodeKey={({ node }) => node.id}
            generateNodeProps={rowInfo => {
              const { node, path } = rowInfo;
              const buttons = [
                <AddModal onAddNodes={onAddNodes} nodeInfo={rowInfo} />,
                <button onClick={() => this.handleRemoveNode(path)}>
                  <TrashIcon />
                </button>
              ];

              return {
                buttons: buttons,
                id: node.id
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
        <Col md={5} onKeyDown={this.handleKeyDown}>
          <Well className="well">
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
  editMode: bool.isRequired,
  onAddNodes: func,
  activeNodeInfo: shape({}),
  onSearchFinish: oneOfType([func, bool]),
  searchString: string,
  searchFocusIndex: number
};

TreeContainer.defaultProps = {
  editMode: false,
  onAddNodes: null,
  highlightUnmapped: false,
  onSelectNode: null,
  activeNodeInfo: {},
  onSearchFinish: null,
  searchString: "",
  searchFocusIndex: 0
};

export default TreeContainer;
