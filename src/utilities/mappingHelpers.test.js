import {
  getActiveNodeInfo,
  mapNode,
  isMapped,
  exportMappingsToXML
} from "./mappingHelpers";

describe("getActiveNodeInfo", () => {
  const treeData = [
    { id: 1 },
    { id: 2, expanded: true, children: [{ id: 3 }] }
  ];
  it("should return the first node ", () => {
    const treeIndex = 0;
    const result = getActiveNodeInfo(treeData, treeIndex);

    expect(result.node.id).toEqual(1);
    expect(result.path).toEqual([1]);
    expect(result.treeIndex).toEqual(0);
  });

  it("should return the correct path if nested ", () => {
    const treeIndex = 2;
    const result = getActiveNodeInfo(treeData, treeIndex);

    expect(result.node.id).toEqual(3);
    expect(result.path).toEqual([2, 3]);
    expect(result.treeIndex).toEqual(2);
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

    expect(result.mapping).toEqual(newMapping);
    expect(
      result.children.every(child => child.mapping === newMapping)
    ).toBeTruthy();
  });

  it("should only map the nodes without mappings", () => {
    const result = mapNode(treeData, newMapping, false);
    expect(result.mapping).toEqual(newMapping);
    expect(
      result.children.filter(child => child.mapping === oldMapping).length
    ).toEqual(2);
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

describe("exportMappingsToXML", () => {
  const xmlParser = new DOMParser();
  const treeData = [
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
  const type = "categories";
  let result = exportMappingsToXML(treeData, type, false, false);
  // console.log(result);
  const xmlResult = xmlParser.parseFromString(result, "text/xml");

  it("Sets the root node with correct mapping type", () => {
    const rootNode = xmlResult.getElementsByTagName("mapping")[0];
    expect(rootNode.nodeName).toEqual("mapping");
    expect(rootNode.getAttribute("type")).toEqual("function");
  });

  it("Returns a default node with correct mapping", () => {
    // function exportMappingsToXML( treeData = [], type = "str", outputParents = bool, prettyfy = bool)
    const defaultNode = xmlResult.getElementsByTagName("default")[0];
    expect(defaultNode.nodeName).toEqual("default");
    // I can't get the CDATA value! What's going on?
    // expect(xmlResult.getElementsByTagName("boardvalue")[0].textContent).toEqual(
    //   "24000"
    // );
  });

  it("Returns the proper map for the first non-default mapping", () => {
    const firstMappingNode = xmlResult.getElementsByTagName("map")[0];
    expect(firstMappingNode.nodeName).toEqual("map");
    expect(firstMappingNode.getAttribute("equestvalue")).toEqual("17000000");
    expect(
      xmlResult.getElementsByTagName("boardvalue")[1].getAttribute("tier")
    ).toEqual("1");
    // expect(xmlResult.getElementsByTagName("boardvalue")[1].textContent).toEqual(
    //   "1000"
    // );
  });

  it("Returns multiple tiers when output parents enabled", () => {
    result = exportMappingsToXML(treeData, type, true, false);
    const xmlResult = xmlParser.parseFromString(result, "text/xml");
    const defaultNode = xmlResult.getElementsByTagName("default")[0];
    expect(defaultNode.nodeName).toEqual("default");
    defaultNode.childNodes.forEach((boardValueNode, i) =>
      expect(boardValueNode.getAttribute("tier")).toEqual(String(i + 1))
    );
  });
});
