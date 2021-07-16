/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<CourseList />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should verify that `CourseList` renders correctly when `listCourses` is not passed', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(2);
    const noCoursesMessage = wrapper.find('tbody tr td');
    expect(noCoursesMessage.text()).toEqual('No course available yet');
  });

  it('should verify that `CourseList` renders correctly if an empty array is passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(2);
    const noCoursesMessage = wrapper.find('tbody tr td');
    expect(noCoursesMessage.text()).toEqual('No course available yet');
  });

  it('should verify that `CourseList` renders correctly when `listCourses` is passed', () => {
    const listCourses = [
      { id: 1, name: 'Web Design', credit: 60 },
      { id: 2, name: 'Resume', credit: 10 },
      { id: 3, name: 'NodeJS', credit: 140 }
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(5);

    expect(rows.at(2).props().textFirstCell).toEqual('Web Design');
    expect(rows.at(2).props().textSecondCell).toEqual(60);

    expect(rows.at(3).props().textFirstCell).toEqual('Resume');
    expect(rows.at(3).props().textSecondCell).toEqual(10);

    expect(rows.at(4).props().textFirstCell).toEqual('NodeJS');
    expect(rows.at(4).props().textSecondCell).toEqual(140);
  });
});
