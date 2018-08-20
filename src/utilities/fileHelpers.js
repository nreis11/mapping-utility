import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";
import * as eqValues from "../values/eqValues";
import FileSaver from "file-saver";

export const saveToJson = ({
  intTreeData,
  extTreeData,
  options,
  activeType,
  boardName,
  testing = false
}) => {
  // Saving as flat data instead of tree data. More info in getFlatDataFromTree helper.
  const jsonString = JSON.stringify({
    intFlatData: getFlatData(intTreeData),
    extFlatData: getFlatData(extTreeData),
    options,
    activeType,
    boardName
  });
  if (testing) {
    return jsonString;
  }
  // FileSaver solves cross-browser compatibility
  const file = new Blob([jsonString], { type: "application/json" });
  const fileName = `${boardName}-${activeType}.json`;
  FileSaver.saveAs(file, fileName);
};

export const getTreeData = type => {
  const flatData = eqValues[type];
  return getTreeDataFromFlatData(flatData);
};

export const getTreeDataFromFlatData = flatData => {
  return getTreeFromFlatData({
    flatData: flatData.map(node => ({ ...node, expanded: false })),
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
  });
};

export const getFlatData = treeData => {
  return getFlatDataFromTree({
    treeData: treeData,
    getNodeKey: ({ node }) => node.id,
    ignoreCollapsed: false // Makes sure you traverse every node in the tree, not just the visible ones
  }).map(({ node, path }) => ({
    id: node.id,
    title: node.title,
    mapping: node.mapping,
    parent: path.length > 1 ? path[path.length - 2] : null
  }));
};
