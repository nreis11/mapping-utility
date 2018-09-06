import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  addNodeUnderParent,
  getNodeAtPath
} from "react-sortable-tree";
import xmlbuilder from "xmlbuilder";

const getNodeKey = ({ node }) => node.id;

export const _handleMapAction = ({ e, activeIntNode, path, treeIndex }) => {
  let newNode;
  let key = e.keyCode || e.target.dataset.cmd;
  if ((e.shiftKey && key === 32) || key === "shift-space") {
    // "Select node and its children. Preserve existing mappings"
    newNode = _mapNode([activeIntNode], path, false);
    treeIndex += 1;
  } else if ((e.ctrlKey && key === 32) || key === "ctrl-space") {
    // "Select node and its children. Overwrite any existing mappings."
    newNode = _mapNode([activeIntNode], path, true);
    treeIndex += 1;
  } else if (key === 32 || key === "space") {
    // "Map single node"
    activeIntNode.mapping = path;
    newNode = activeIntNode;
    treeIndex += 1;
  }
  return { newNode, treeIndex };
};

export const _handleDeleteAction = ({ e, activeIntNode, treeIndex }) => {
  let newNode;
  let key = e.keyCode || e.target.dataset.cmd;
  if (e.shiftKey && e.keyCode === 8) {
    // "SHIFT BACKSPACE";
    // "Delete current node & everything under that node, then move up to the previous node."
    newNode = _mapNode([activeIntNode], null, true);
    treeIndex -= 1;
  } else if (e.keyCode === 46 || key === "delete") {
    // "DELETE: Delete current node mapping and move down to the next node."
    activeIntNode.mapping = null;
    newNode = activeIntNode;
    treeIndex += 1;
  } else if ((e.shiftKey && e.keyCode === 46) || key === "shift-delete") {
    // "SHIFT DELETE: Delete current node & everything under that node, then move down to the next node."
    newNode = _mapNode([activeIntNode], null, true);
    treeIndex += 1;
  } else if (e.keyCode === 8) {
    // "BACKSPACE Delete current node mapping and move up to the previous node."
    activeIntNode.mapping = null;
    newNode = activeIntNode;
    treeIndex -= 1;
  } else {
    return false;
  }
  return { newNode, treeIndex };
};

export const _handleSearchAction = ({ e, activeIntNode, activeExtNode }) => {
  let searchInternal, searchString;
  const key = e.keyCode;
  const modifier = e.ctrlKey || e.metaKey;
  if (modifier && key === 70) {
    // console.log("CTRL + F");
    // Autocomplete search field with active node title
    searchString = activeIntNode ? activeIntNode.title : "";
    searchInternal = false;
  } else if (modifier && key === 71) {
    // console.log("CTRL + G");
    searchString = activeExtNode ? activeExtNode.title : "";
    searchInternal = true;
  } else {
    return false;
  }
  return { searchString, searchInternal };
};

export const _getActiveNodeInfo = (treeData, treeIndex) => {
  // Utility doesn't return treeIndex. Manually added back in.
  return {
    ...getVisibleNodeInfoAtIndex({
      treeData,
      index: treeIndex,
      getNodeKey
    }),
    treeIndex
  };
};

export const _addNodeUnderParent = ({ treeData, path, newNode }) => {
  return addNodeUnderParent({
    treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode
  }).treeData;
};

export const _mapNode = (treeData, mapping, overwrite = false) => {
  // Map node and its descendants. Returns treeData array. Take 0 index.
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
};

export const _sortTree = treeData => {
  return treeData.sort(
    (a, b) => (a.title === b.title ? 0 : a.title < b.title ? -1 : 1)
  );
};

export const _isMapped = treeData => {
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
};

export const _changeNodeAtPath = (treeData, path, newNode) => {
  return changeNodeAtPath({
    treeData,
    path,
    newNode,
    getNodeKey,
    ignoreCollapsed: true
  });
};

export const _exportMappingsToXML = ({
  intTreeData,
  extTreeData,
  activeType,
  outputParents,
  testing = false
}) => {
  const types = {
    categories: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  const mappingType = types[activeType];
  let rootNode = xmlbuilder
    .create("mapping", { encoding: "UTF-8" })
    .att("type", mappingType);

  const callback = ({ node }) => {
    if (!node.mapping) {
      return;
    }

    return _createNode({
      rootNode,
      node,
      extTreeData,
      outputParents,
      testing
    });
  };

  walk({
    treeData: intTreeData,
    getNodeKey,
    callback,
    ignoreCollapsed: false
  });

  return rootNode.end({ pretty: testing ? false : true });
};

const _createNode = ({
  rootNode,
  node,
  extTreeData,
  outputParents = false,
  testing = false
}) => {
  const getNodeTitle = path =>
    getNodeAtPath({
      treeData: extTreeData,
      path,
      getNodeKey
    }).node.title;

  // If testing, use plain text node. Otherwise, use CDATA
  // Mapping is path array with node ids
  let mapping = node.mapping;
  const childNode = rootNode.ele(node.id === "eqDEFAULT" ? "default" : "map");

  if (node.id !== "eqDEFAULT") {
    // Each equest node has 'eq' prefix
    childNode.att("equestvalue", node.id.slice(2));
  }

  if (outputParents) {
    // Multi-tier
    mapping.forEach((tierMapping, idx) => {
      // Get path up to node
      const path = mapping.slice(0, idx + 1);
      const extNodeTitle = getNodeTitle(path);
      // Actual value is last id
      const idArr = tierMapping.split("-");
      tierMapping = idArr[idArr.length - 1];
      const boardValueNode = childNode.ele("boardvalue").att("tier", idx + 1);
      boardValueNode.att("label", extNodeTitle);
      testing
        ? boardValueNode.txt(tierMapping)
        : boardValueNode.dat(tierMapping);
    });
  } else {
    // Grab last value. Only single tier
    const extNodeTitle = getNodeTitle(mapping);
    let lastIdArr = mapping[mapping.length - 1].split("-");
    mapping = lastIdArr[lastIdArr.length - 1];
    const boardValueNode = childNode.ele("boardvalue").att("tier", 1);
    boardValueNode.att("label", extNodeTitle);
    testing ? boardValueNode.txt(mapping) : boardValueNode.dat(mapping);
  }

  return rootNode;
};

// SAMPLE

// <?xml version="1.0" encoding="ISO-8859-1" ?>
// <mapping type="country">
// 	<default>
// 		<boardvalue tier="1"><![CDATA[USA]]></boardvalue>
// 	</default>
// 	<map equestvalue="AD">
// 		<boardvalue tier="1"><![CDATA[AND]]></boardvalue>
// 	</map>
// 	<map equestvalue="AE">
// 		<boardvalue tier="1"><![CDATA[ARE]]></boardvalue>
// 	</map>
// 	<map equestvalue="AF">
// 		<boardvalue tier="1"><![CDATA[AFG ]]></boardvalue>
// 	</map>
// </mapping>
