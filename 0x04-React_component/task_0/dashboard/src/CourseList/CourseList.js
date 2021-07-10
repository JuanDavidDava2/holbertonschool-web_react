import React from "react";
import PropTypes from "prop-types";

import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

import "./CourseList.css";


function CourseList({ listCourses }) {
  return (
    <div className="course-container">
      <div className="course-wrapper">
        <table id="CourseList">
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
              isHeader={true}
            />
          </thead>
          <tbody>
            {listCourses.length === 0 && (
              <CourseListRow
                textFirstCell="No course available yet"
                isHeader={false}
              />
            )}

            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;