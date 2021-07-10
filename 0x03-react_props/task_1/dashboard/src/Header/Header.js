import React from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => (
  <div className='header'>
    <img src={logo} />
    <h1>School dashboard</h1>
  </div>
);

export default Header;
