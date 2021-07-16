/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseListRow isHeader={true} />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should check the component renders one cell with `colspan = 2` when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Course" />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.props().colSpan).toEqual('2');
  });

  it('should check to test the component renders two cells when `textSecondCell` is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Course"
        textSecondCell="Credit"
      />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).render().text()).toEqual('Course');
    expect(th.at(1).render().text()).toEqual('Credit');
  });

  it('should check the component renders correctly two <td> elements within a <tr> element', () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="Course"
        textSecondCell="Credit"
      />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).parent().is('tr')).toEqual(true);
  });
});
