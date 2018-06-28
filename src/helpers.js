import {
  walk,
  map,
  getVisibleNodeInfoAtIndex,
  changeNodeAtPath,
  getTreeFromFlatData
} from "react-sortable-tree";
import xmlbuilder from "xmlbuilder";

const getNodeKey = ({ node }) => node.id;

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

export function exportMappingsToXML(treeData) {
  return createXMLTemplate("country", treeData);
  // Iterate through treedata, grab id and mapping
  // If output parents, need to grab path of mapped mode
  // Otherwise, grab last mapping index
  // const callback = ({ node }) =>
  //   console.log("ID: ", node.id, "Mapping: ", node.mapping);
  // walk({
  //   treeData: treeData,
  //   getNodeKey,
  //   callback: callback,
  //   ignoreCollapsed: false
  // });
}

function createXMLTemplate(type, treeData) {
  // let xml = '<?xml version="1.0" encoding="ISO-8859-1" ?><mapping></mapping>';
  let xmlDoc = xmlbuilder.create("mapping", { type: type });

  const callback = ({ node }) =>
    // console.log("ID: ", node.id, "Mapping: ", node.mapping);
    createNode(node);
  walk({
    treeData: treeData,
    getNodeKey,
    callback: callback,
    ignoreCollapsed: false
  });
  return;
}

function createNode(node) {
  if (node.id === "DEFAULT" && node.mapping) {
    const mapping = node.mapping[node.mapping.length - 1];
    let defaultNode = xmlbuilder
      .create("default")
      .ele("boardvalue", { tier: "1" })
      .dat(mapping)
      .end({ pretty: true });
    console.log(defaultNode);
  }
}

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
