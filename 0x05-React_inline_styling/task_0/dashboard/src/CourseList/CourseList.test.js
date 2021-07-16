import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList /> without `listCourses` property', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = wrapper = shallow(<CourseList />);
  });

  it('should verify that `CourseList` renders correctly when `listCourses` is not passed', () => {
    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).lengthOf(2);
    const noCoursesMessage = wrapper.find('tbody tr td');
    expect(noCoursesMessage.text()).to.equal('No course available yet');
  });
});

describe('<CourseList listCourses={[]}/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={[]}/>);
  });

  it('should verify that `CourseList` renders correctly if an empty array is passed', () => {
    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).lengthOf(2);
    const noCoursesMessage = wrapper.find('tbody tr td');
    expect(noCoursesMessage.text()).to.equal('No course available yet');
  });
});

describe('<CourseList /> without `listCourses` property', () => {
  let wrapper;
  const listCourses = [
    { id: 1, name: 'Web Design', credit: 60 },
    { id: 2, name: 'Resume', credit: 10 },
    { id: 3, name: 'NodeJS', credit: 140 }
  ];

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it('should verify that `CourseList` renders correctly when `listCourses` is passed', () => {
    expect(wrapper.exists());
    const rows = wrapper.find(CourseListRow);
    expect(rows).lengthOf(5);

    expect(rows.at(2).props()).to.have.property('textFirstCell', 'Web Design');
    expect(rows.at(2).props()).to.have.property('textSecondCell', 60);

    expect(rows.at(3).props()).to.have.property('textFirstCell', 'Resume');
    expect(rows.at(3).props()).to.have.property('textSecondCell', 10);

    expect(rows.at(4).props()).to.have.property('textFirstCell', 'NodeJS');
    expect(rows.at(4).props()).to.have.property('textSecondCell', 140);
  });
});
