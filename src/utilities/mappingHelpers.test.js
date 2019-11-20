import {
  _getActiveNodeInfo,
  _mapNode,
  _isMapped,
  _exportMappingsToXML,
  DELIMITER
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
    functions: [
      {
        id: "DEFAULT",
        title: "(Default)",
        parent: null,
        mapping: [
          {
            id: `1${DELIMITER}100`,
            title: "Managers"
          },
          { id: `2${DELIMITER}110`, title: "Operation Manager" }
        ]
      },
      {
        id: "17000000",
        title: "Architecture and Engineering",
        parent: null,
        mapping: [
          { id: `1${DELIMITER}201`, title: "Architecture and Engineering" }
        ],
        children: [
          {
            id: "17100000",
            title: "Architect",
            parent: "17000000",
            mapping: [
              { id: `2${DELIMITER}201`, title: "Architecture and Engineering" },
              { id: `2${DELIMITER}255`, title: "Architect" }
            ]
          }
        ]
      }
    ],
    industries: [
      {
        id: "DEFAULT",
        title: "(Default)",
        parent: null,
        mapping: [{ id: `1${DELIMITER}1000`, title: "General" }]
      },
      {
        id: "1",
        title: "Advertising/Public Relations",
        parent: null,
        mapping: [
          { id: `1${DELIMITER}34`, title: "Advertising, Communication & PR" }
        ]
      }
    ],
    states: [{ id: "DEFAULT", title: "(Default)", parent: null }],
    countries: [{ id: "DEFAULT", title: "(Default)", parent: null }]
  };

  const typeAttr = {
    functions: "function",
    industries: "industry",
    states: "state",
    countries: "country"
  };

  const options = {
    outputParents: false,
    parentsSelectable: false,
    outputLabels: false
  };

  let result = _exportMappingsToXML({
    intTreeData,
    options,
    testing: true
  });
  const xmlObj = xmlParser.parseFromString(result, "text/xml");
  const functionMappingNode = xmlObj.getElementsByTagName("mapping")[0];
  const defaultNode = xmlObj.getElementsByTagName("default")[0];

  it("Sets the root node", () => {
    const rootNode = xmlObj.getElementsByTagName("maps")[0];
    expect(rootNode.nodeName).toEqual("maps");
  });

  it("Sets the mapping node with correct mapping type", () => {
    Object.keys(intTreeData).forEach((type, i) => {
      const node = xmlObj.getElementsByTagName("mapping")[i];
      expect(node.nodeName).toEqual("mapping");
      expect(node.getAttribute("type")).toEqual(typeAttr[type]);
    });
  });

  it("Returns a default node with correct mapping", () => {
    const sourceNode = intTreeData.functions[0];
    const mappedNode = sourceNode.mapping[sourceNode.mapping.length - 1];
    expect(defaultNode.nodeName).toEqual("default");
    const firstChild = defaultNode.firstChild;
    expect(firstChild.textContent).toEqual(mappedNode.id.slice(2));
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
      "Architecture and Engineering"
    );
    expect(firstBoardValueChild.textContent).toEqual("201");
  });

  describe("_exportMappingsToXML with outputParents", () => {
    const options = {
      outputParents: true,
      parentsSelectable: false,
      outputLabels: false
    };

    const result = _exportMappingsToXML({
      intTreeData,
      options,
      testing: true
    });
    const xmlObj = xmlParser.parseFromString(result, "text/xml");
    const defaultNode = xmlObj.getElementsByTagName("default")[0];

    it("Returns correct default node mapping", () => {
      expect(defaultNode.nodeName).toEqual("default");
      const tieredMappings = intTreeData.functions[0].mapping.map(
        tier => tier.id.split(DELIMITER)[1]
      );
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.textContent).toEqual(tieredMappings[i]);
      });
    });

    it("Returns correct default node tier", () => {
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("tier")).toEqual(String(i + 1));
      });
    });

    it("Returns correct default node label", () => {
      const labels = intTreeData.functions[0].mapping.map(tier => tier.title);
      expect(defaultNode.nodeName).toEqual("default");
      defaultNode.childNodes.forEach((boardValueNode, i) => {
        expect(boardValueNode.getAttribute("label")).toEqual(labels[i]);
      });
    });
  });

  describe("_exportMappingsToXML with outputLabels", () => {
    const options = {
      outputParents: false,
      parentsSelectable: false,
      outputLabels: true
    };

    const result = _exportMappingsToXML({
      intTreeData,
      options,
      testing: true
    });

    const xmlObj = xmlParser.parseFromString(result, "text/xml");
    const defaultNode = xmlObj.getElementsByTagName("default")[0];
    const functionMappingNode = xmlObj.getElementsByTagName("mapping")[0];

    it("Returns a default node with correct mapping", () => {
      const sourceNode = intTreeData.functions[0];
      expect(defaultNode.nodeName).toEqual("default");
      const firstChild = defaultNode.firstChild;
      expect(firstChild.textContent).toEqual(sourceNode.title);
    });

    it("Returns the proper map for the first non-default mapping", () => {
      const sourceNode = intTreeData.functions[1];
      const firstMapChild = functionMappingNode.getElementsByTagName("map")[0];
      const firstBoardValueChild = firstMapChild.getElementsByTagName(
        "boardvalue"
      )[0];
      expect(firstMapChild.nodeName).toEqual("map");
      expect(firstMapChild.getAttribute("equestvalue")).toEqual(sourceNode.id);
      expect(firstBoardValueChild.getAttribute("tier")).toEqual("1");
      expect(firstBoardValueChild.textContent).toEqual(sourceNode.title);
    });
  });
});
