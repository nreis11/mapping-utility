import React from "react";
import { shallow, mount } from "enzyme";
import BoardNameForm from "./BoardNameForm";
import { Form } from "react-bootstrap";

describe("<BoardNameForm/>", () => {
  let wrapper;
  const boardNameId = "#form-board-name";
  const props = {
    boardName: "Board",
    handleInputChange: jest.fn()
  };

  it("renders the form", () => {
    wrapper = shallow(<BoardNameForm {...props} />);
    const form = wrapper.find(Form);
    expect(form.length).toBe(1);
  });

  it("Handles changes", () => {
    const newBoardName = "NEW";
    wrapper = mount(<BoardNameForm {...props} />);
    const stateKey = wrapper.find(boardNameId).prop("name");
    wrapper.find(boardNameId).simulate("change", {
      target: { name: stateKey, value: newBoardName }
    });
    expect(wrapper.prop("handleInputChange")).toHaveBeenCalled();
  });

  it("allows editing when edit button is clicked", () => {
    wrapper = mount(<BoardNameForm {...props} />);
    expect(wrapper.find(boardNameId).prop("disabled")).toBe(true);
    // HandleEdit button
    wrapper.find(".btn").simulate("click");
    expect(wrapper.find(boardNameId).prop("disabled")).toBe(false);
  });
});
