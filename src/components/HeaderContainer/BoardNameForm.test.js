import React from "react";
import { shallow, mount } from "enzyme";
import BoardNameForm from "./BoardNameForm";

describe("<BoardNameForm/>", () => {
  let wrapper;
  let boardName = "Board";

  it("renders the form", () => {
    wrapper = shallow(
      <BoardNameForm handleInputChange={() => {}} name={boardName} />
    );
  });

  it("Renders changes", () => {
    const newBoardName = "NEW";
    wrapper = mount(
      <BoardNameForm handleInputChange={() => {}} name={boardName} />
    );
    const stateKey = wrapper.find("#formBoardName").prop("name");
    wrapper.find("#formBoardName").simulate("change", {
      target: { name: stateKey, value: newBoardName }
    });
    expect(wrapper.find("#formBoardName").prop("value")).toEqual(newBoardName);
  });

  it("allows editing when edit button is clicked", () => {
    wrapper = mount(
      <BoardNameForm handleInputChange={() => {}} name={boardName} />
    );
    expect(wrapper.find("#formBoardName").prop("disabled")).toBe(true);
    // HandleEdit button
    wrapper.find(".btn").simulate("click");
    expect(wrapper.find("#formBoardName").prop("disabled")).toBe(false);
  });
});
