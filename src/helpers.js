import { walk, map, getVisibleNodeInfoAtIndex } from "react-sortable-tree";

const getNodeKey = ({ node }) => node.id;

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
