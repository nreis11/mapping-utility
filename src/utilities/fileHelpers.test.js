import { saveToJson, traverse } from "./fileHelpers";

describe("saveToJson", () => {
  const intTreeData = {
    categories: [
      {
        id: "eqDEFAULT",
        mapping: ["200", "200~~201"]
      },
      {
        id: "eq17000000",
        mapping: ["100"],
        children: [
          {
            id: "eq17100000",
            mapping: ["100", "100~~101"]
          }
        ]
      }
    ],
    industries: [
      { id: "eqDEFAULT", mapping: ["1000"] },
      { id: "eq1", mapping: ["24000"] }
    ],
    states: [{ id: "eqDEFAULT" }],
    countries: [{ id: "eqDEFAULT" }]
  };

  const extTreeData = {
    categories: [
      {
        id: "200",
        title: "Managers",
        children: [{ id: "200~~201", title: "Operation Manager" }]
      },
      {
        id: "100",
        title: "Community and Social Services",
        children: [{ id: "100~~101", title: "Religious Workers" }]
      }
    ],
    industries: [
      { id: "24000", title: "Advertising, Communication & PR", parent: null },
      { id: "1000", title: "Agriculture, Fishing & Forestry", parent: null }
    ],
    states: [],
    countries: []
  };

  const options = { outputParents: false, parentsSelectable: true };
  const boardName = "testBoard";
  const activeType = "categories";
  const stateObj = {
    intTreeData,
    extTreeData,
    activeType,
    options,
    boardName
  };

  const jsonString = saveToJson(stateObj, true);
  // Check output
  const jsonObj = JSON.parse(jsonString);

  it("Saves the correct keys and values", () => {
    Object.keys(stateObj).forEach(key => {
      const value = jsonObj[key];
      expect(value).toEqual(stateObj[key]);
    })
  });
});

describe("traverse", () => {
  const jsonObj = {
    "500": {
      "73": { label: "English" },
      "74": { label: "German" },
      "75": { label: "French" },
      "81": { label: "Croatian" },
      "82": { label: "Serbian" },
      "83": { "999": { label: "Arabic-Child" }, label: "Arabic" },
      label: "Language skills"
    },
    "600": { label: "Computer Skills" }
  };

  const result = traverse(jsonObj);

  it("Creates a root node with parent as null", () => {
    const rootNode = result.find(node => node.id === "600");
    expect(rootNode.title).toEqual("Computer Skills");
    expect(rootNode.parent).toEqual(null);
  });

  it("Creates a node for each of the key/value pairs", () => {
    expect(result.length).toEqual(9);
  });

  it("Creates the correct child node with corresponding parent", () => {
    const arabicChild = result.find(node => node.id === "500~~83~~999");
    expect(arabicChild.title).toEqual("Arabic-Child");
    expect(arabicChild.parent).toEqual("500~~83");
  });
});
