import yaml from "js-yaml";

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
    parent = rootNodes.includes(key) ? null : parent;
    let node = { id: key, title: value.label, parent };
    nodes.push(node);

    if (typeof value === "object" && Object.keys(value).length > 1) {
      parent = curr;
      traverse(value, parent, nodes, rootNodes);
    }
  });
  return nodes;
};

// Get document, or throw exception on error

// export const parseYaml = yamlFile => {
//   try {
//     const nodes = [];
//     const fileReader = new FileReader();
//     fileReader.readAsText(yamlFile);
//     fileReader.onload = e => {
//       const jsonObj = yaml.safeLoad(e.target.result);
//       const nodes = traverse(jsonObj);
//       //   console.log(jsonObj);
//       return nodes;
//     };
//     // const nodes = createJson(yamlFile);
//     // return nodes;
//   } catch (e) {
//     console.log(e);
//   } finally {
//     // console.log(nodes);
//   }
// };
