import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render () {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection { ...this.props } />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
  children: null
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    width: '100%',
    marginBottom: '40px',
  }
});

export default BodySectionWithMarginBottom;
