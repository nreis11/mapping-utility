import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  addNodeUnderParent
} from "react-sortable-tree";
import xmlbuilder from "xmlbuilder";

const getNodeKey = ({ node }) => node.id;

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

export const _addNodeUnderParent = ({treeData, path, newNode}) => {
  return addNodeUnderParent({
    treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode
  }).treeData
}

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
  // IF CHILDREN NEED TO BE SORTED
  // return map({
  //   treeData,
  //   getNodeKey,
  //   callback: ({ node }) =>
  //     !node.children
  //       ? node
  //       : {
  //           ...node,
  //           children: node.children.sort((a, b) => (a.title === b.title ? 0 : a.title < b.title ? -1 : 1))
  //         },
  //   ignoreCollapsed: false
  // });
};

export const _isMapped = treeData => {
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
  pretty = true
) => {
  const types = {
    categories: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  const mappingType = types[type];
  let rootNode = xmlbuilder
    .create("mapping", { encoding: "ISO-8859-1" })
    .att("type", mappingType);
  const callback = ({ node }) => _createNode(rootNode, node, outputParents);

  walk({
    treeData: treeData,
    getNodeKey,
    callback,
    ignoreCollapsed: false
  });

  return rootNode.end({ pretty: pretty });
};

const _createNode = (rootNode, node, outputParents = false) => {
  if (!node.mapping) {
    return;
  }

  let mapping = node.mapping;
  let childNode = rootNode.ele(node.id === "eqDEFAULT" ? "default" : "map");

  if (node.id !== "eqDEFAULT") {
    // Each node has 'eq' prepended
    childNode.att("equestvalue", node.id.slice(2));
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
