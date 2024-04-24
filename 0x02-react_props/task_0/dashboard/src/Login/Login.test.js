/** @format */

import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import Login from "./Login";

describe("Login component", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 labels"', () => {
    const wrapper = shallow(<Login />);
    const inputTags = wrapper.find("input");
    const labelTags = wrapper.find("label");

    expect(inputTags.length).toBe(2);
    expect(labelTags.length).toBe(2);
  });
});
