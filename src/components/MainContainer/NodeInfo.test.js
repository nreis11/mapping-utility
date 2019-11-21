import React from "react";
import ReactDOM from "react-dom";
import NodeInfo from "./NodeInfo";

describe("<NodeInfo />", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NodeInfo heading="Test" />, div);
  });

  it("should render with a node prop", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <NodeInfo heading="Test" node={{ id: "1", title: "Title" }} />,
      div
    );
  });

  it("should render without a node prop", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NodeInfo heading="Test" node={null} />, div);
  });
});
