import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  const rowBackground = css(isHeader ? styles.header : styles.default);
 
  return (
    <tr className={rowBackground}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.thCellStyle, styles.padding)}>{textFirstCell}</th>
            <th className={css(styles.thCellStyle, styles.padding)}>{textSecondCell}</th>
          </>
        ) : (<th className={css(styles.padding)} colSpan="2">{textFirstCell}</th>)
      ) : (
        <>
          <td className={css(styles.padding)}>{textFirstCell}</td>
          <td className={css(styles.padding)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  thCellStyle: {
    textAlign: 'left',
    borderTop: '1px solid lightgray',
  },

  padding: {
    padding: '0.3rem',
  },

  header: {
    backgroundColor: '#deb5b545',
  },

  default: {
    backgroundColor: '#f5f5f5ab',
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
