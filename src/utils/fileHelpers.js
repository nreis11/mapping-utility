import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";
import { _sortTree, DELIMITER, TYPES } from "./mappingHelpers";
import * as eqValues from "../values/eqValues";
import FileSaver from "file-saver";
import yaml from "js-yaml";

export const saveToJson = (state, testing = false) => {
  const jsonString = JSON.stringify({
    ...state
  });
  if (testing) {
    return jsonString;
  }
  // FileSaver solves cross-browser compatibility
  const file = new Blob([jsonString], { type: "application/json" });
  const fileName = `MU-${state.boardName}.json`;
  FileSaver.saveAs(file, fileName);
};

// Returns all treeData or only a certain type
export const getInitialTreeData = (type = false) => {
  let treeData = {};
  const injectFlatData = flatData => {
    const newFlatData = flatData.map(node => ({
      ...node,
      isInternal: true,
      mapping: []
    }));
    return newFlatData;
  };
  if (type) {
    const newFlatData = injectFlatData(eqValues[type]);
    treeData[type] = getTreeDataFromFlatData(newFlatData);
  } else {
    Object.keys(eqValues).forEach(type => {
      const newFlatData = injectFlatData(eqValues[type]);
      treeData[type] = getTreeDataFromFlatData(newFlatData);
    });
  }
  return treeData;
};

export const getTreeDataFromFlatData = flatData => {
  return getTreeFromFlatData({
    flatData,
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
  });
};

export const getInitialExtTreeData = () => {
  const treeData = {};
  Object.keys(TYPES).map(type => (treeData[type] = []));
  return treeData;
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
// YAML -> JSON -> flatData -> treeData
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
        const sortedNodes = _sortTree(nodes);
        const extTreeData = getTreeDataFromFlatData(sortedNodes);
        onChange(extTreeData, treeKey);
      }
    }
  };
  fileReader.readAsText(yamlFile);
};

// Recursive func used to create flat data from JSON
export const traverse = (jsonObj, parent = null, nodes = [], tier = 0) => {
  tier++;
  Object.entries(jsonObj).forEach(([key, value]) => {
    if (key === "label") {
      return;
    }

    if (!value.label) {
      throw new Error(`No label found for key ${key}. Cannot continue.`);
    }

    // Create uid with delimiter. Avoids duplicate keys.
    let curr = `${tier}${DELIMITER}${key}`;

    let node = {
      id: curr,
      title: value.label,
      parent: parent,
      isInternal: false
    };
    nodes.push(node);

    traverse(value, curr, nodes, tier);
  });
  return nodes;
};
