import { getFlatDataFromTree } from "react-sortable-tree";

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
  let link = document.createElement("a");
  let file = new Blob([jsonString], { type: "application/json" });
  link.href = URL.createObjectURL(file);
  link.download = "mapping.json";
  link.click();
};

const getFlatData = treeData => {
  return getFlatDataFromTree({
    treeData: treeData,
    getNodeKey: ({ node }) => node.id, // This ensures your "id" properties are exported in the path
    ignoreCollapsed: false // Makes sure you traverse every node in the tree, not just the visible ones
  }).map(({ node, path }) => ({
    id: node.id,
    title: node.title,
    mapping: node.mapping,
    parent: path.length > 1 ? path[path.length - 2] : null
  }));
};
