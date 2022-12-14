import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formBox}>
            <label>Email</label>
            <input type='text' name='email' />
          </div>
          <div className={styles.formBox}>
            <label>Hasło</label>
            <input />
          </div>
          <div>
            <p>
              Nie pamiętasz hasła?
              <button className={styles.password}>Przypomnij hasło.</button>
            </p>
          </div>
          <div className={styles.buttons}>
            <NavLink exact to={'/'}>
              <button className={styles.loginButton} variant='login'>
                {' '}
                Zaloguj się{' '}
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
