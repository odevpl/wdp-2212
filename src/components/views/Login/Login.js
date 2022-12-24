import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const validCredentials = {
    email: 'admin',
    password: 'pass',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrStr, setEmailErrStr] = useState('');
  const [passErrStr, setPassErrStr] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('działa');
    console.log('email', email);
    console.log('password', password);

    if (email === validCredentials.email && password === validCredentials.password) {
      document.location = `${process.env.PUBLIC_URL}/`;
      console.log('logging in...');
    } else {
      if (password !== validCredentials.password) {
        setPassErrStr('Wpisałeś niepoprawne hasło.');
        setPassword('');
        if (email !== validCredentials.email) {
          setEmailErrStr('Wpisałeś niepoprawny login.');
          setEmail('');
        }
      } else if (email !== validCredentials.email) {
        setEmailErrStr('Wpisałeś niepoprawny login.');
        setEmail('');
        if (password !== validCredentials.password) {
          setPassErrStr('Wpisałeś niepoprawne hasło.');
          setPassword('');
        }
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Email</label>
            <input
              className={styles.loginInput}
              type='text'
              name='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.loginLabel}>Hasło</label>
            <input
              className={styles.loginInput}
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <p>
              Nie pamiętasz hasła?
              <a href='#'> Przypomnij hasło.</a>
            </p>
          </div>
          {emailErrStr !== '' ? <div style={{ color: 'red' }}>{emailErrStr}</div> : ''}
          {passErrStr !== '' ? <div style={{ color: 'red' }}>{passErrStr}</div> : ''}
          <div className={styles.buttons}>
            <NavLink style={{ textDecoration: 'none' }} exact to={'/'}>
              <button type='submit' className={styles.button} onClick={handleSubmit}>
                Zaloguj się
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
