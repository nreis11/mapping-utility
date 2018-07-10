import React from "react";
import { shallow } from "enzyme";
import ActionBar from "./ActionBar";

describe("<ActionBar />", () => {
  it("should render without crashing", () => {
    shallow(
      <ActionBar
        expandAll={() => {
          return;
        }}
        intKey="Internal"
        extKey="External"
        onClick={() => {
          return;
        }}
        onHighlightUnmapped={() => {
          return;
        }}
      />
    );
  });
});
