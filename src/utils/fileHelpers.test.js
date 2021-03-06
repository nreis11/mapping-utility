import { saveToJson, traverse } from "./fileHelpers";
import { DELIMITER } from "./mappingHelpers";

describe("saveToJson", () => {
  const intTreeData = {
    functions: [
      {
        id: "eqDEFAULT",
        mapping: [
          {
            id: `1${DELIMITER}200`,
            title: "Managers"
          },
          { id: `2${DELIMITER}201`, title: "Operation Manager" }
        ]
      },
      {
        id: "eq17000000",
        mapping: [{ id: `1${DELIMITER}201`, title: "Banker" }],
        children: [
          {
            id: "eq17100000",
            mapping: [{ id: `2${DELIMITER}255`, title: "Teller" }]
          }
        ]
      }
    ],
    industries: [
      {
        id: "eqDEFAULT",
        mapping: [{ id: `1${DELIMITER}1000`, title: "General" }]
      },
      {
        id: "eq1",
        mapping: [
          { id: `1${DELIMITER}34`, title: "Advertising, Communication & PR" }
        ]
      }
    ],
    states: [{ id: "eqDEFAULT" }],
    countries: [{ id: "eqDEFAULT" }]
  };

  const extTreeData = {
    functions: [
      {
        id: `1${DELIMITER}200`,
        title: "Managers",
        children: [{ id: `2${DELIMITER}201`, title: "Operation Manager" }]
      },
      {
        id: `1${DELIMITER}100`,
        title: "Community and Social Services",
        children: [{ id: `2${DELIMITER}101`, title: "Religious Workers" }]
      }
    ],
    industries: [
      {
        id: `1${DELIMITER}34`,
        title: "Advertising, Communication & PR",
        parent: null
      },
      { id: `1${DELIMITER}1000`, title: "General", parent: null }
    ],
    states: [],
    countries: []
  };

  const options = { outputParents: false, parentsSelectable: true };
  const boardName = "testBoard";
  const activeType = "functions";
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
    });
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
    const rootNode = result.find(node => node.id === `1${DELIMITER}600`);
    expect(rootNode.title).toEqual("Computer Skills");
    expect(rootNode.parent).toEqual(null);
  });

  it("Creates a node for each of the key/value pairs", () => {
    expect(result.length).toEqual(9);
  });

  it("Creates the correct child node with corresponding parent", () => {
    const arabicChild = result.find(node => node.id === `3${DELIMITER}999`);
    expect(arabicChild.title).toEqual("Arabic-Child");
    expect(arabicChild.parent).toEqual(`2${DELIMITER}83`);
  });
});
