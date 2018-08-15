import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("<Login />", () => {
  it("should render without crashing", () => {
    const location = { state: { from: { pathname: "/mapping" } } };
    shallow(<Login location={location} />);
  });
});
