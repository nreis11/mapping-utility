import { saveToJson, getFlatData, traverse } from "./fileHelpers";

describe("saveToJson", () => {
  const intTreeData = [
    {
      id: "eqDEFAULT",
      mapping: ["3000", "24000"]
    },
    {
      id: "eq17000000",
      mapping: ["1000"],
      children: [
        {
          id: "eq17100000",
          mapping: ["27001"]
        }
      ]
    }
  ];

  const extTreeData = [
    {
      id: "3000",
      children: [{ id: "24000", title: "Child" }]
    },
    {
      id: "1000"
    },
    {
      id: "27001"
    }
  ];

  const options = { outputParents: false, parentsSelectable: true };
  const activeType = "industries";
  const boardName = "testBoard";
  const fileObj = {
    intTreeData,
    extTreeData,
    options,
    activeType,
    boardName,
    testing: true
  };
  const jsonString = saveToJson(fileObj);
  // Check output
  const jsonObj = JSON.parse(jsonString);

  it("Saves the correct intFlatData", () => {
    const result = jsonObj.intFlatData;
    const expected = getFlatData(intTreeData);
    expect(result).toEqual(expected);
  });

  it("Saves the correct extFlatData", () => {
    const result = jsonObj.extFlatData;
    const expected = getFlatData(extTreeData);
    expect(result).toEqual(expected);
  });

  it("Saves the correct options", () => {
    const result = jsonObj.options;
    expect(result).toEqual(options);
  });

  it("Saves the correct activeType", () => {
    const result = jsonObj.activeType;
    expect(result).toEqual(activeType);
  });

  it("Saves the correct boardName", () => {
    expect(jsonObj.boardName).toEqual(boardName);
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
    }
  };

  const result = traverse(jsonObj);

  it("Creates a root node with parent as null", () => {
    const rootNode = result.find(node => node.id === "500");
    expect(rootNode.title).toEqual("Language skills");
    expect(rootNode.parent).toEqual(null);
  });

  it("Creates a node for each of the key/value pairs", () => {
    expect(result.length).toEqual(8);
  });

  it("Creates the correct child node with corresponding parent", () => {
    const arabicChild = result.find(node => node.id === "999");
    expect(arabicChild.parent).toEqual("83");
  });
});
