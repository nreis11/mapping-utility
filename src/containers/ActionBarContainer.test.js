import React from "react";
import { shallow } from "enzyme";
import ActionBarContainer from "./ActionBarContainer";
import { ActionButton } from "../components/ActionBar/ActionButton";
import { ExpandCollapseButtons } from "../components/ActionBar/ExpandCollapseButtons";

describe("<ActionBarContainer/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ActionBarContainer
        expandAll={() => {}}
        onHighlightUnmapped={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("renders the action bar container", () => {
    const container = wrapper.find(".action-container");
    expect(container.length).toBe(1);
  });

  it("renders all action buttons", () => {
    const buttons = wrapper.find(ActionButton);
    expect(buttons.length).toBe(6);
  });

  it("renders all expand/collapse buttons", () => {
    const buttons = wrapper.find(ExpandCollapseButtons);
    expect(buttons.length).toBe(2);
  });
});
