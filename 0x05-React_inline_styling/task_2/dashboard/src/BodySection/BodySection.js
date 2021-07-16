import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class BodySection extends Component {
  render () {
    const { title, children } = this.props;

    return (
      <div className={css(styles.bodySection)}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySection: {
    margin: '0 2rem'
  }
});

export default BodySection;
