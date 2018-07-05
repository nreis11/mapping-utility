import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  getTreeFromFlatData
} from "react-sortable-tree";
import xmlbuilder from "xmlbuilder";

const getNodeKey = ({ node }) => node.id;

const types = {
  categories: "function",
  industries: "industry",
  states: "state",
  countries: "country"
};

export function getTreeDataFromFlatData(flatData) {
  return getTreeFromFlatData({
    flatData: flatData.map(node => ({ ...node, expanded: false })),
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null // The value of the parent key when there is no parent (i.e., at root level)
  });
}

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
  // Can I early return if I find mapping?
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

export function modifyNodeAtPath(treeData, path, newNode) {
  return changeNodeAtPath({
    treeData,
    path,
    newNode,
    getNodeKey,
    ignoreCollapsed: true
  });
}

export function exportMappingsToXML(treeData, type, outputParents) {
  // NEED TO GRAB TYPE

  // Iterate through treedata, grab id and mapping
  // If output parents, need to grab path of mapped mode
  // Otherwise, grab last mapping index
  const mappingType = types[type];
  let rootNode = xmlbuilder
    .create("mapping", { encoding: "ISO-8859-1" })
    .att("type", mappingType);
  const callback = ({ node }) => createNode(rootNode, node, outputParents);

  walk({
    treeData: treeData,
    getNodeKey,
    callback: callback,
    ignoreCollapsed: false
  });

  return rootNode.end({ pretty: true });
}

function createNode(rootNode, node, outputParents = false) {
  if (!node.mapping) {
    return;
  }

  let mapping = node.mapping;
  let childNode = rootNode.ele(node.id === "DEFAULT" ? "default" : "map");

  if (node.id !== "DEFAULT") {
    childNode.att("equestvalue", node.id);
  }

  if (outputParents) {
    mapping.forEach((mapping, idx) => {
      const tier = idx + 1;
      childNode
        .ele("boardvalue")
        .att("tier", tier)
        .dat(mapping);
    });
  } else {
    // Grab last value
    mapping = mapping[mapping.length - 1];
    childNode
      .ele("boardvalue")
      .att("tier", 1)
      .dat(mapping);
  }

  return rootNode;
}

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
