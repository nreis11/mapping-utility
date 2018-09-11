import {
  _getActiveNodeInfo,
  _mapNode,
  _isMapped,
  _exportMappingsToXML
} from "./mappingHelpers";

describe("_getActiveNodeInfo", () => {
  const treeData = [
    { id: "1" },
    { id: "2", expanded: true, children: [{ id: "3" }] }
  ];
  it("should return the first node ", () => {
    const treeIndex = 0;
    const result = _getActiveNodeInfo(treeData, treeIndex);

    expect(result.node.id).toEqual("1");
    expect(result.path).toEqual(["1"]);
    expect(result.treeIndex).toEqual(0);
  });

  it("should return the correct path if nested ", () => {
    const treeIndex = 2;
    const result = _getActiveNodeInfo(treeData, treeIndex);

    expect(result.node.id).toEqual("3");
    expect(result.path).toEqual(["2", "3"]);
    expect(result.treeIndex).toEqual(2);
  });
});

describe("_mapNode", () => {
  let treeData;
  const oldMapping = "OLD";
  const newMapping = "NEW";
  beforeEach(() => {
    treeData = [
      {
        id: "1",
        mapping: null,
        children: [
          {
            id: "2",
            mapping: oldMapping
          },
          {
            id: "3",
            mapping: oldMapping
          }
        ]
      }
    ];
  });
  it("should map the node and its descendants", () => {
    const result = _mapNode(treeData, newMapping, true);

    expect(result.mapping).toEqual(newMapping);
    expect(
      result.children.every(child => child.mapping === newMapping)
    ).toBeTruthy();
  });

  it("should only map the nodes without mappings", () => {
    const result = _mapNode(treeData, newMapping, false);
    expect(result.mapping).toEqual(newMapping);
    expect(
      result.children.filter(child => child.mapping === oldMapping).length
    ).toEqual(2);
  });
});

describe("_isMapped", () => {
  it("Returns false if no mapping found", () => {
    const treeData = [
      {
        id: "1",
        mapping: null,
        children: [
          {
            id: "2",
            mapping: null
          }
        ]
      }
    ];

    expect(_isMapped(treeData)).toEqual(false);
  });

  it("Returns true if a mapping is found", () => {
    const treeData = [
      {
        id: "1",
        mapping: null,
        children: [
          {
            id: "2",
            mapping: "mapped"
          }
        ]
      }
    ];

    expect(_isMapped(treeData)).toEqual(true);
  });
});

describe("_exportMappingsToXML", () => {
  const xmlParser = new DOMParser();
  const intTreeData = {
    categories: [
      {
        id: "eqDEFAULT",
        mapping: ["200", "200-201"]
      },
      {
        id: "eq17000000",
        mapping: ["100"],
        children: [
          {
            id: "eq17100000",
            mapping: ["100", "100-101"]
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
        children: [{ id: "200-201", title: "Operation Manager" }]
      },
      {
        id: "100",
        title: "Community and Social Services",
        children: [{ id: "100-101", title: "Religious Workers" }]
      }
    ],
    industries: [
      { id: "24000", title: "Advertising, Communication & PR", parent: null },
      { id: "1000", title: "Agriculture, Fishing & Forestry", parent: null }
    ],
    states: [],
    countries: []
  };

  const types = {
    categories: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  let xmlObj, defaultNode, functionMappingNode;

  let result = _exportMappingsToXML({
    intTreeData,
    extTreeData,
    outputParents: false,
    testing: true
  });
  xmlObj = xmlParser.parseFromString(result, "text/xml");
  functionMappingNode = xmlObj.getElementsByTagName("mapping")[0];
  defaultNode = xmlObj.getElementsByTagName("default")[0];

  it("Sets the root node", () => {
    const rootNode = xmlObj.getElementsByTagName("maps")[0];
    expect(rootNode.nodeName).toEqual("maps");
  });

  it("Sets the mapping node with correct mapping type", () => {
    Object.keys(intTreeData).forEach((type, i) => {
      const node = xmlObj.getElementsByTagName("mapping")[i];
      expect(node.nodeName).toEqual("mapping");
      expect(node.getAttribute("type")).toEqual(types[type]);
    });
  });

  it("Returns a default node with correct mapping", () => {
    expect(defaultNode.nodeName).toEqual("default");
    const firstChild = defaultNode.firstChild;
    expect(firstChild.textContent).toEqual("201");
  });

  it("Returns a default node with correct label", () => {
    const firstChild = defaultNode.firstChild;
    expect(firstChild.nodeName).toEqual("boardvalue");
    expect(firstChild.getAttribute("label")).toEqual("Operation Manager");
  });

  it("Returns the proper map for the first non-default mapping", () => {
    const firstMapChild = functionMappingNode.getElementsByTagName("map")[0];
    const firstBoardValueChild = firstMapChild.getElementsByTagName(
      "boardvalue"
    )[0];
    expect(firstMapChild.nodeName).toEqual("map");
    expect(firstMapChild.getAttribute("equestvalue")).toEqual("17000000");
    expect(firstBoardValueChild.getAttribute("tier")).toEqual("1");
    expect(firstBoardValueChild.getAttribute("label")).toEqual(
      "Community and Social Services"
    );
    expect(firstBoardValueChild.textContent).toEqual("100");
  });

  describe("_exportMappingsToXML with outputParents", () => {
    // Output parents
    const result = _exportMappingsToXML({
      intTreeData,
      extTreeData,
      outputParents: true,
      testing: true
    });
    const xmlObj = xmlParser.parseFromString(result, "text/xml");
    const defaultNode = xmlObj.getElementsByTagName("default")[0];

    it("Returns correct default node mappings when output parents enabled", () => {
      expect(defaultNode.nodeName).toEqual("default");
      const tieredMappings = ["200", "201"];
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.textContent).toEqual(tieredMappings[i]);
      });
    });

    it("Returns correct default node tiers when output parents enabled", () => {
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("tier")).toEqual(String(i + 1));
      });
    });

    it("Returns correct default node labels when output parents enabled", () => {
      const labels = ["Managers", "Operation Manager"];
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("label")).toEqual(labels[i]);
      });
    });
  });
});
