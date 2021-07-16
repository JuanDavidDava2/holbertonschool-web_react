import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:<input id="email" type="email" /></label>
      <label htmlFor="password">Password:<input id="password" type="password" /></label>
      <button>OK</button>
    </React.Fragment>
  );
}

export default Login;
