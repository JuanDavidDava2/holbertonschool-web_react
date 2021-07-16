import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow isHeader={true} />', () => {
  it('should check the component renders one cell with `colspan = 2` when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Course" />
    );
    const th = wrapper.find('th');
    expect(th.length).to.equal(1);
    expect(th.props()).to.have.property('colSpan').to.equal('2');
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
    expect(th.length).to.equal(2);
    expect(th.at(0).render().text()).to.equal('Course');
    expect(th.at(1).render().text()).to.equal('Credit');
  });
});

describe('<CourseListRow /> with default value { false }', () => {
  it('should check the component renders correctly two <td> elements within a <tr> element', () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="Course"
        textSecondCell="Credit"
      />
    );
    const td = wrapper.find('td');
    expect(td.length).to.equal(2);
    expect(td.at(0).parent().is('tr')).to.equal(true);
  });
});
