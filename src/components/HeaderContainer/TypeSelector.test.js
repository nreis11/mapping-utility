import React from "react";
import { shallow } from "enzyme";
import TypeSelector from "./TypeSelector";
import { Dropdown } from "react-bootstrap";
import { TYPES } from "../../utils/mappingHelpers";

const activeType = Object.keys(TYPES)[0];
const handleSelect = jest.fn();

describe("<TypeSelector/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TypeSelector activeType={activeType} onSelect={handleSelect} />
    );
  });

  it("Renders the active type label", () => {
    const dropdownBtn = wrapper.find("#dropdown-basic-type");
    expect(dropdownBtn.text()).toEqual(TYPES[activeType]);
  });

  it("Renders all menu items", () => {
    const dropDownItems = wrapper.find(Dropdown.Item);
    expect(dropDownItems.length).toEqual(Object.keys(TYPES).length);
  });

  it("Calls proper event handler on select", () => {
    const firstChild = wrapper.find(Dropdown.Item).at(0);
    firstChild.simulate("select");
    expect(handleSelect).toHaveBeenCalled();
  });
});
