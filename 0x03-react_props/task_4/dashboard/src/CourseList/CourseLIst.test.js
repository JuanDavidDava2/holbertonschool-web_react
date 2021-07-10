import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists());
  });
  it("Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(1);
    expect(item.prop("colSpan")).toEqual("2");
  });
  it("Add a check to test the component renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="one"
        textSecondCell="two"
      />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(2);
    expect(item.first().text()).toEqual("one");
    expect(item.at(1).text()).toEqual("two");
  });
  it("Add a check to test the component renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="one"
        textSecondCell="two"
      />
    );
    wrapper.update();
    const item = wrapper.find("tr");

    expect(item).toHaveLength(1);
    expect(item.children("td")).toHaveLength(2);
  });
});