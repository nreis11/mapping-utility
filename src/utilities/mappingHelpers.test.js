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
  const intTreeData = [
    {
      id: "eqDEFAULT",
      mapping: ["3000", "3000-24000"]
    },
    {
      id: "eq17000000",
      mapping: ["1000"],
      children: [
        {
          id: "eq17100000",
          mapping: ["1000", "1000-27001"]
        }
      ]
    }
  ];

  const extTreeData = [
    {
      id: "3000",
      title: "US",
      children: [{ id: "3000-24000", title: "Texas" }]
    },
    {
      id: "1000",
      title: "Africa",
      children: [{ id: "1000-27001", title: "Egypt" }]
    }
  ];

  const activeType = "categories";
  let xmlObj, defaultNode;

  beforeAll(() => {
    let result = _exportMappingsToXML({
      intTreeData,
      extTreeData,
      activeType,
      outputParents: false,
      testing: true
    });
    xmlObj = xmlParser.parseFromString(result, "text/xml");
    defaultNode = xmlObj.getElementsByTagName("default")[0];
  });

  it("Sets the root node with correct mapping type", () => {
    const rootNode = xmlObj.getElementsByTagName("mapping")[0];
    expect(rootNode.nodeName).toEqual("mapping");
    expect(rootNode.getAttribute("type")).toEqual("function");
  });

  it("Returns a default node with correct mapping", () => {
    expect(defaultNode.nodeName).toEqual("default");
    const firstChild = defaultNode.firstChild;
    expect(firstChild.textContent).toEqual("24000");
  });

  it("Returns a default node with correct label", () => {
    const firstChild = defaultNode.firstChild;
    expect(firstChild.nodeName).toEqual("boardvalue");
    expect(firstChild.getAttribute("label")).toEqual("Texas");
  });

  it("Returns the proper map for the first non-default mapping", () => {
    const firstMappingNode = xmlObj.getElementsByTagName("map")[0];
    expect(firstMappingNode.nodeName).toEqual("map");
    expect(firstMappingNode.getAttribute("equestvalue")).toEqual("17000000");
    expect(
      xmlObj.getElementsByTagName("boardvalue")[1].getAttribute("tier")
    ).toEqual("1");
    expect(xmlObj.getElementsByTagName("boardvalue")[1].textContent).toEqual(
      "1000"
    );
  });

  describe("_exportMappingsToXML with outputParents", () => {
    // Output parents
    const result = _exportMappingsToXML({
      intTreeData,
      extTreeData,
      activeType,
      outputParents: true,
      testing: true
    });
    const xmlObj = xmlParser.parseFromString(result, "text/xml");
    const defaultNode = xmlObj.getElementsByTagName("default")[0];

    it("Returns correct mappings when output parents enabled", () => {
      expect(defaultNode.nodeName).toEqual("default");
      const tieredMappings = ["3000", "24000"];
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.textContent).toEqual(tieredMappings[i]);
      });
    });

    it("Returns correct tiers when output parents enabled", () => {
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("tier")).toEqual(String(i + 1));
      });
    });

    it("Returns correct labels when output parents enabled", () => {
      const labels = ["US", "Texas"];
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("label")).toEqual(labels[i]);
      });
    });
  });
});
