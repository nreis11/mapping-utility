import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { mount } from "enzyme";

import LoginForm from "../LoginForm";

test("Simulate user input and submit", () => {
  const handleSubmit = jest.fn();
  const { renderIntoDocument, Simulate } = ReactTestUtils;

  const wrapper = mount(<LoginForm onSubmit={handleSubmit} />);

  //   expect(wrapper.find("#formUserName")).to.have.length(1);
  //   document.getElementById("formUserName").value = "test@equest.com";
  //   document.getElementById("formPassword").value = "test";
  //   Simulate.submit(document.getElementById("loginForm"));

  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  //   expect(handleSubmit).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       username: "test@equest.com",
  //       password: "test"
  //     })
  //   );
});
