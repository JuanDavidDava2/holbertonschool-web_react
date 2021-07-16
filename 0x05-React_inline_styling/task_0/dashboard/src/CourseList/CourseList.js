import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

function CourseList({ listCourses }) {
  const contentCourses = listCourses.map(({ id, name, credit }) =>
    <CourseListRow key={id} isHeader={false} textFirstCell={name} textSecondCell={credit} />);

  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          isHeader={true} textFirstCell="Available courses"
        />
        <CourseListRow
          isHeader={true} textFirstCell="Course name" textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length ? (
          contentCourses
        ) : (
          <tr>
            <td colSpan='2'>No course available yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
