import { map, getVisibleNodeInfoAtIndex } from "react-sortable-tree";

export function getActiveNode(treeData, treeIndex) {
  const getNodeKey = ({ node }) => node.id;
  return getVisibleNodeInfoAtIndex({
    treeData,
    index: treeIndex,
    getNodeKey
  });
}

export function mapNode(treeData, mapping, overwrite = false) {
  // Map node and its descendants
  const getNodeKey = ({ node }) => node.id;
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
