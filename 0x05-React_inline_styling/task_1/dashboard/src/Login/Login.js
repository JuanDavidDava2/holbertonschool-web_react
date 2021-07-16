import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:
        <input id="email" type="email" className={css(styles.input)} />
      </label>
      <label htmlFor="password">Password:
        <input id="password" type="password" className={css(styles.input)} />
      </label>
      <button className={css(styles.button)}>OK</button>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: '0.5rem',
  },

  input: {
    margin: '0 0.5rem',
  },
});

export default Login;
