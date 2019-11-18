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
export const delimiter = "|";

const getPathNodes = (treeData, path) => {
  let nodes = path.map((nodeId, idx) => {
    return getNodeAtPath({
      treeData,
      path: path.slice(0, idx + 1),
      getNodeKey
    }).node;
  });
  return nodes;
};

export const _handleMapAction = ({
  e,
  activeIntNode,
  path,
  activeExtTreeData
}) => {
  let newNode;
  let pathNodes = getPathNodes(activeExtTreeData, path);
  let key = e.keyCode || e.target.dataset.cmd;
  if ((e.shiftKey && key === 32) || key === "shift-space") {
    // "Select node and its children. Preserve existing mappings"
    newNode = _mapNode([activeIntNode], pathNodes, false);
  } else if ((e.ctrlKey && key === 32) || key === "ctrl-space") {
    // "Select node and its children. Overwrite any existing mappings."
    newNode = _mapNode([activeIntNode], pathNodes, true);
  } else if (key === 32 || key === "space") {
    // "Map single node"
    newNode = { ...activeIntNode, mapping: pathNodes };
  }
  return newNode;
};

export const _handleDeleteAction = ({ e, activeIntNode }) => {
  let newNode;
  let key = e.keyCode || e.target.dataset.cmd;
  if ((e.shiftKey && e.keyCode === 8) || key === "shift-delete") {
    // "SHIFT BACKSPACE";
    // "Delete current node & everything under that node"
    newNode = _mapNode([activeIntNode], null, true);
  } else if (e.keyCode === 8 || key === "delete") {
    // "BACKSPACE Delete current node mapping."
    newNode = { ...activeIntNode, mapping: null };
  } else {
    return false;
  }
  return newNode;
};

export const _handleSearchAction = ({ e, activeIntNode, activeExtNode }) => {
  let searchInternal, searchString;
  const key = e.keyCode;
  if (key === 70) {
    // "CTRL + F";
    // Autocomplete search field with active node title
    searchString = activeIntNode ? activeIntNode.title : "";
    searchInternal = false;
  } else if (key === 71) {
    // "CTRL + G";
    searchString = activeExtNode ? activeExtNode.title : "";
    searchInternal = true;
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
  return treeData.sort((a, b) =>
    a.title === b.title ? 0 : a.title < b.title ? -1 : 1
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
  options,
  testing = false
}) => {
  const { outputParents, outputLabels } = options;
  const types = {
    categories: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  let rootNode = xmlbuilder.create("maps", { encoding: "UTF-8" });

  Object.keys(intTreeData).forEach(type => {
    const mappingNode = rootNode.ele("mapping").att("type", types[type]);

    const callback = ({ node }) => {
      if (!outputLabels && !node.mapping) {
        return;
      }

      return _createNode({
        mappingNode,
        node,
        outputParents,
        outputLabels,
        testing
      });
    };

    walk({
      treeData: intTreeData[type],
      getNodeKey,
      callback,
      ignoreCollapsed: false
    });
  });
  return rootNode.end({ pretty: testing ? false : true });
};

const _createNode = ({
  mappingNode,
  node,
  outputParents = false,
  outputLabels = false,
  testing = false
}) => {
  // If testing, use plain text node. Otherwise, use CDATA
  // Mapping is path array with node ids
  let { mapping } = node;
  const childNode = mappingNode.ele(
    node.id === "eqDEFAULT" ? "default" : "map"
  );

  if (node.id !== "eqDEFAULT") {
    // Each equest node has 'eq' prefix
    childNode.att("equestvalue", node.id.slice(2));
  }

  if (outputLabels) {
    const id = node.title;
    const boardValueNode = childNode
      .ele("boardvalue")
      .att("tier", 1)
      .att("label", id);
    testing ? boardValueNode.txt(id) : boardValueNode.dat(id);
  } else if (outputParents) {
    // Multi-tier
    mapping.forEach((tierNode, idx) => {
      // Get path up to node
      const { title } = tierNode;
      const idArr = tierNode.id.split(delimiter);
      const id = idArr[1];
      const boardValueNode = childNode
        .ele("boardvalue")
        .att("tier", idx + 1)
        .att("label", title);
      testing ? boardValueNode.txt(id) : boardValueNode.dat(id);
    });
  } else {
    // Single tier
    const lastNode = mapping[mapping.length - 1];
    let { id, title } = lastNode;
    // Ex. 1|55
    id = id.split(delimiter)[1];
    const boardValueNode = childNode
      .ele("boardvalue")
      .att("tier", 1)
      .att("label", title);
    testing ? boardValueNode.txt(id) : boardValueNode.dat(id);
  }

  return mappingNode;
};

// SAMPLE

// <?xml version="1.0" encoding="ISO-8859-1" ?>
// <maps>
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
// </maps>
