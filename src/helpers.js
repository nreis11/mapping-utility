import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  getTreeFromFlatData
} from "react-sortable-tree";

const getNodeKey = ({ node }) => node.id;

export function getTreeDataFromFlatData(flatData) {
  return getTreeFromFlatData({
    flatData: flatData.map(node => ({ ...node, expanded: false })),
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
  });
}

export function getActiveNode(treeData, treeIndex) {
  return getVisibleNodeInfoAtIndex({
    treeData,
    index: treeIndex,
    getNodeKey
  });
}

export function mapNode(treeData, mapping, overwrite = false) {
  // Map node and its descendants
  return map({
    treeData,
    getNodeKey,
    callback: ({ node }) => {
      if (overwrite) {
        return { ...node, mapping: mapping };
      } else {
        return node.mapping ? node : { ...node, mapping: mapping };
      }
    },
    ignoreCollapsed: false
  })[0];
}

export function checkForMapping(treeData) {
  let foundMapping = false;
  const callback = ({ node }) => {
    if (node.mapping) {
      foundMapping = true;
    }
  };

  walk({
    treeData: treeData,
    getNodeKey,
    callback: callback,
    ignoreCollapsed: false
  });

  return foundMapping;
}

export function modifyNodeAtPath(treeData, path, newNode) {
  return changeNodeAtPath({
    treeData,
    path,
    newNode,
    getNodeKey,
    ignoreCollapsed: true
  });
}
