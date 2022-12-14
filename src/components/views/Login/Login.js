import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Email</label>
            <input className={styles.loginInput} type='text' name='email' />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Hasło</label>
            <input className={styles.loginInput} />
          </div>
          <div>
            <p>
              Nie pamiętasz hasła?
              <a href='#'> Przypomnij hasło.</a>
            </p>
          </div>
          <div className={styles.buttons}>
            <NavLink style={{ textDecoration: 'none' }} exact to={'/'}>
              <button className={styles.button}>Zaloguj się</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
