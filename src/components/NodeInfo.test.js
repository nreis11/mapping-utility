import React from "react";
import { shallow } from "enzyme";
import NodeInfo from "./NodeInfo";

describe("<NodeInfo />", () => {
  it("renders without crashing", () => {
    shallow(<NodeInfo />);
  });
});
