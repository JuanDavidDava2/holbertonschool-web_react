import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";

function CourseList() {
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
            <CourseListRow
              textFirstCell="ES6"
              textSecondCell="60"
              isHeader={false}
            />
            <CourseListRow
              textFirstCell="Webpack"
              textSecondCell="20"
              isHeader={false}
            />
            <CourseListRow
              textFirstCell="React"
              textSecondCell="40"
              isHeader={false}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseList;