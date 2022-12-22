import React from 'react';
import styles from './Register.module.scss';
import RegisterForm from '../RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <div className={styles.registerBox}>
      <div className={styles.innerBox}>
        <RegisterForm />
      </div>
    </div>
  );
};
