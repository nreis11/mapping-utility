import React from "react";
import { shallow } from "enzyme";
import ActionBarContainer from "./ActionBarContainer";

describe("<ActionBarContainer />", () => {
  it("should render without crashing", () => {
    shallow(
      <ActionBarContainer
        expandAll={() => {
          return;
        }}
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
