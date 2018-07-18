import React from "react";
import { shallow } from "enzyme";
import NodeInfo from "./NodeInfo";

describe("<NodeInfo />", () => {
  it("should render without crashing", () => {
    shallow(<NodeInfo heading="Test" />);
  });

  it("should render with a node prop", () => {
    shallow(<NodeInfo heading="Test" node={{ id: 1, title: "Title" }} />);
  });

  it("should render without a node prop", () => {
    shallow(<NodeInfo heading="Test" node={null} />);
  });
});
