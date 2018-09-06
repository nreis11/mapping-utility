import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  addNodeUnderParent
} from "react-sortable-tree";
import xmlbuilder from "xmlbuilder";

const getNodeKey = ({ node }) => node.id;

export const _handleMapAction = ({
  e,
  key,
  activeIntNode,
  path,
  treeIndex
}) => {
  let newNode;
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

export const _handleDeleteAction = ({ e, key, activeIntNode, treeIndex }) => {
  let newNode;
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

export const _exportMappingsToXML = (
  treeData,
  type,
  outputParents,
  testing = false
) => {
  const types = {
    categories: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  const mappingType = types[type];
  let rootNode = xmlbuilder
    .create("mapping", { encoding: "UTF-8" })
    .att("type", mappingType);
  const callback = ({ node }) =>
    _createNode(rootNode, node, outputParents, testing);

  walk({
    treeData: treeData,
    getNodeKey,
    callback,
    ignoreCollapsed: false
  });

  return rootNode.end({ pretty: testing ? false : true });
};

const _createNode = (rootNode, node, outputParents = false, testing) => {
  // If testing, use plain text node. Otherwise, use CDATA
  if (!node.mapping) {
    return;
  }

  // Mapping is path array with node ids
  let mapping = node.mapping;
  const childNode = rootNode.ele(node.id === "eqDEFAULT" ? "default" : "map");

  if (node.id !== "eqDEFAULT") {
    // Each equest node has 'eq' prefix
    childNode.att("equestvalue", node.id.slice(2));
  }

  if (outputParents) {
    mapping.forEach((mapping, idx) => {
      const nodeArr = mapping.split("-");
      mapping = nodeArr[nodeArr.length - 1];
      const tier = idx + 1;
      const boardValueNode = childNode.ele("boardvalue").att("tier", tier);
      testing ? boardValueNode.txt(mapping) : boardValueNode.dat(mapping);
    });
  } else {
    // Grab last value
    let lastNodeArr = mapping[mapping.length - 1].split("-");
    mapping = lastNodeArr[lastNodeArr.length - 1];
    const boardValueNode = childNode.ele("boardvalue").att("tier", 1);
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
