import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton School Logo"/>
      <h1 className={css(styles.heading)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e01d3f',
  },

  heading: {
    color: '#e01d3f',
  },

  logo: {
    width: '180px',
    height: '180px',
  },
});

export default Header;
