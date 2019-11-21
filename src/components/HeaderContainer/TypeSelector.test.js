import React from "react";
import { shallow, mount } from "enzyme";
import TypeSelector from "./TypeSelector";
import { TYPES } from "../../utilities/mappingHelpers";

const activeType = Object.keys(TYPES)[0];
const handleSelect = () => {};

describe("<TypeSelector/>", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(
      <TypeSelector activeType={activeType} onSelect={handleSelect} />
    );
  });

  it("Renders the active type label", () => {
    wrapper = shallow(
      <TypeSelector activeType={activeType} onSelect={handleSelect} />
    );

    const dropdownBtn = wrapper.find("DropdownButton");
    expect(dropdownBtn.prop("title")).toBe(TYPES[activeType]);
  });
});
