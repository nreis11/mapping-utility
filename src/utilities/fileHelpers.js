import { getFlatDataFromTree, getTreeFromFlatData } from "react-sortable-tree";
import { _sortTree } from "./mappingHelpers";
import * as eqValues from "../values/eqValues";
import FileSaver from "file-saver";
import yaml from "js-yaml";

export const saveToJson = (state, testing = false) => {
  // Saving as flat data to reduce file size. More info in getFlatDataFromTree helper.
  const jsonString = JSON.stringify({
    ...state
  });
  if (testing) {
    return jsonString;
  }
  // FileSaver solves cross-browser compatibility
  const file = new Blob([jsonString], { type: "application/json" });
  const fileName = `${state.boardName}.json`;
  FileSaver.saveAs(file, fileName);
};

export const getInitialTreeData = (type = false) => {
  let treeData = {};
  if (type) {
    treeData[type] = getTreeDataFromFlatData(eqValues[type]);
  } else {
    Object.keys(eqValues).forEach(type => {
      treeData[type] = getTreeDataFromFlatData(eqValues[type]);
    });
  }
  return treeData;
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
export const traverse = (jsonObj, parent = null, nodes = []) => {
  Object.entries(jsonObj).forEach(([key, value]) => {
    if (key === "label") {
      return;
    }

    if (!value.label) {
      throw new Error(`No label found for key ${key}. Cannot continue.`);
    }

    // Using parent to create UID with delimiter. Avoids duplicate keys.
    let curr = parent ? `${parent}-${key}` : key;

    let node = {
      id: curr,
      title: value.label,
      parent: parent
    };
    nodes.push(node);

    traverse(value, curr, nodes);
  });
  return nodes;
};
