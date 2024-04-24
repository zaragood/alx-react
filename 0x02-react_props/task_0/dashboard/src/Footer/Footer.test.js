/** @format */

import { shallow } from 'enzyme'
import React from "react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
