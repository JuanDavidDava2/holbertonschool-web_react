import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  const contentCourses = listCourses.map(({ id, name, credit }) =>
    <CourseListRow key={id} isHeader={false} textFirstCell={name} textSecondCell={credit} />);

  return (
    <table id="CourseList" className={css(styles.table, styles.border)}>
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

const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderCollapse: "collapse",
  },
  border: {
    border: '1px solid lightgray',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
