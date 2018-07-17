import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";
import { categories, industries, states, countries } from "./values/eqValues";

export const saveToJson = ({
  intTreeData,
  extTreeData,
  options,
  activeType
}) => {
  let jsonString;
  const intFlatData = getFlatData(intTreeData);
  const extFlatData = getFlatData(extTreeData);
  jsonString = JSON.stringify({
    intFlatData,
    extFlatData,
    options,
    activeType
  });
  // Link doesn't work in Firefox. Investigate!
  let link = document.createElement("a");
  let file = new Blob([jsonString], { type: "application/json" });
  link.href = URL.createObjectURL(file);
  link.download = "mapping.json";
  link.click();
};

export const getTreeData = name => {
  const internalData = {
    categories: categories,
    industries: industries,
    states: states,
    countries: countries
  };

  const flatData = internalData[name];
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

const getFlatData = treeData => {
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
