import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";
import * as eqValues from "../values/eqValues";
import FileSaver from "file-saver";
import yaml from "js-yaml";

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

export const getInitialTreeData = type => {
  const flatData = eqValues[type];
  return getTreeDataFromFlatData(flatData);
};

export const getTreeDataFromFlatData = flatData => {
  return getTreeFromFlatData({
    flatData: flatData.map(node => ({ ...node })),
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

// Uses fileReader and JS YAML to load and convert to JSON
export const importYaml = ({ yamlFile, treeKey, onChange, handleError }) => {
  const fileReader = new FileReader();
  fileReader.onload = e => {
    let nodes = [];
    try {
      const jsonObj = yaml.safeLoad(e.target.result);
      nodes = traverse(jsonObj);
    } catch (e) {
      const error = "Import failed: " + e.message;
      handleError(error);
    } finally {
      if (nodes.length) {
        handleError(null);
        const extTreeData = getTreeDataFromFlatData(nodes);
        onChange(extTreeData, treeKey);
      }
    }
  };
  fileReader.readAsText(yamlFile);
};

// Recursive func used to create flat data from JSON
export const traverse = (
  jsonObj,
  parent = null,
  nodes = [],
  rootNodes = null
) => {
  rootNodes = rootNodes || Object.keys(jsonObj);
  Object.entries(jsonObj).forEach(([key, value]) => {
    if (key === "label") {
      return;
    }

    if (!value.label) {
      throw new Error(`No label found for key ${key}. Cannot continue.`);
    }

    const curr = key;
    let node = {
      id: key.toString(),
      title: value.label,
      parent: rootNodes.includes(key) ? null : parent
    };
    nodes.push(node);

    traverse(value, curr, nodes, rootNodes);
  });
  return nodes;
};
