import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySection.css';

class BodySectionWithMarginBottom extends Component {
  render () {
    return (
      <div className="bodySectionWithMargin">
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

export default BodySectionWithMarginBottom;
