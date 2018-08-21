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

    if (Object.keys(value).length > 1) {
      traverse(value, curr, nodes, rootNodes);
    }
  });
  return nodes;
};
