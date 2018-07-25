import { saveToJson, getFlatData } from "./fileHelpers";

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
