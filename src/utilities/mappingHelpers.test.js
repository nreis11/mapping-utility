import {
  getActiveNodeInfo,
  mapNode,
  isMapped,
  exportMappingsToXML
} from "./mappingHelpers";

describe("getActiveNodeInfo", () => {
  it("should handle some basic treedata ", () => {
    const treeData = [{ id: 1 }, { id: 2 }];
    const treeIndex = 0;
    const result = getActiveNodeInfo(treeData, treeIndex);

    expect(result.node.id).toEqual(1);
    expect(result.path).toEqual([1]);
    expect(result.treeIndex).toEqual(0);
  });
});

describe("mapNode", () => {
  let treeData;
  const oldMapping = "OLD";
  const newMapping = "NEW";
  beforeEach(() => {
    treeData = [
      {
        id: 0,
        mapping: null,
        children: [
          {
            id: 1,
            mapping: oldMapping
          },
          {
            id: 2,
            mapping: oldMapping
          }
        ]
      }
    ];
  });
  it("should map the node and its descendants", () => {
    const result = mapNode(treeData, newMapping, true);

    expect(
      result.mapping === newMapping &&
        result.children.forEach(child => child.mapping === newMapping)
    );
  });

  it("should only map the nodes without mappings", () => {
    const result = mapNode(treeData, newMapping, false);
    expect(
      result.mapping === newMapping &&
        result.children.forEach(child => child.mapping === oldMapping)
    );
  });
});

describe("isMapped", () => {
  it("Returns false if no mapping found", () => {
    const treeData = [
      {
        id: 0,
        mapping: null,
        children: [
          {
            id: 1,
            mapping: null
          }
        ]
      }
    ];

    expect(isMapped(treeData)).toEqual(false);
  });

  it("Returns true if a mapping is found", () => {
    const treeData = [
      {
        id: 0,
        mapping: null,
        children: [
          {
            id: 1,
            mapping: "mapped"
          }
        ]
      }
    ];

    expect(isMapped(treeData)).toEqual(true);
  });
});

// exportMappingsToXML(treeData, type, outputParents)
describe("exportMappingsToXML", () => {
  const xmlParser = new DOMParser();
  const treeData = [
    {
      id: "eqDEFAULT",
      mapping: "24000"
    },
    {
      id: "eq17000000",
      mapping: "1000",
      children: [
        {
          id: "eq17100000",
          mapping: "27001"
        }
      ]
    }
  ];
  const type = "categories";

  it("Returns a default node", () => {
    const outputParents = false;
    let result = exportMappingsToXML(treeData, type, outputParents);
    result = result.replace(/(?:\r\n|\r|\n)/g, "");
    const xmlResult = xmlParser.parseFromString(result, "application/xml");
    const defaultNode = xmlResult.getElementsByTagName("default")[0];
    console.log(defaultNode.childNodes[0].nodeName);
    expect(defaultNode.nodeName === "default");
    // SHOULD I REMOVE THE NEWLINES BEFORE TRYING TO PARSE?
    // expect(
    //   defaultNode.childNodes[0].childNodes[0].nodeValue === "![CDATA[24000]]"
    // );
  });

  it("Returns a default node with mappings", () => {});

  it("Returns multiple tiers when output parents enabled", () => {});
});
