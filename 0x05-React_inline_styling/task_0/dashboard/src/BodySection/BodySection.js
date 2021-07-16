import React, { Component } from 'react';
import './BodySection.css';

class BodySection extends Component {
  render () {
    const { title, children } = this.props;

    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default BodySection;
