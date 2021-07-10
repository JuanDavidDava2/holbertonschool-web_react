import { shallow, mount } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("<WithLogging />", () => {
  it("calls console.log on mount and on unmount", () => {
    console.log = jest.fn();

    const HOC = WithLogging(() => <p />);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Component is going to unmount`
    );

    jest.restoreAllMocks();
  });
  it("calls console.log mount and on unmount. ", () => {
    console.log = jest.fn();

    const HOC = WithLogging(Login);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );

    jest.restoreAllMocks();
  });
});
