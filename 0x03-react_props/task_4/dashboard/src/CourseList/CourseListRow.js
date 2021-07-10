import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

    if (isHeader === true) {
        if (textSecondCell === null) {
            return <tr><th colSpan="2">{textFirstCell}</th></tr>;
        } else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else if (isHeader === false) {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }

}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;