import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegisterForm.module.scss';
import { useState } from 'react';
import { CheckBox } from '../../common/CheckBox/CheckBox';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {
  const formSchema = yup
    .object()
    .shape({
      firstName: yup
        .string()
        .min(3, 'First name cannot be shorter than 3 characters')
        .max(30, 'First name cannot be longer than 30 characters'),
      lastName: yup
        .string()
        .min(3, 'Last name cannot be shorter than 3 characters')
        .max(30, 'Last name cannot be longer than 30 characters'),
      email: yup
        .string()
        .email('Email is required')
        .required(),
      password: yup
        .string()
        .min(3, 'The password cannot be shorter than 3 characters')
        .required(),
      confirmPassword: yup
        .string()
        .min(3, 'The password cannot be shorter than 3 characters')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
    })
    .required();

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitHandler = data => {
    console.log(data);
    reset();
    history.push('/');
  };

  // show password switch button
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const togglePasswordVisibility = e => {
    e.target.checked
      ? setPasswordVisibility('text')
      : setPasswordVisibility('password');
  };

  // check all checkboxes button
  const list = [
    {
      id: '0',
      text: `Akceptuje warunki <span><a href='/'>regulaminu</a></span>*`,
      isChecked: false,
    },
    {
      id: '1',
      text: `Tak, tak! Chcę otrzymać JEŻowy newsletter`,
      isChecked: false,
    },
  ];

  const [checkAll, setCheckAll] = useState(false);
  const [check, setCheck] = useState([]);

  const toggleCheckAll = () => {
    setCheckAll(!checkAll);
    setCheck(list.map(box => box.id));
    if (checkAll) {
      setCheck([]);
    }
  };

  const toggleCheck = e => {
    const { id, checked } = e.target;
    setCheck([...check, id]);
    if (!checked) {
      setCheck(check.filter(item => item !== id));
    }
  };

  return (
    <div className={styles.registerBox}>
      <div className={styles.innerBox}>
        <b>Podaj dane do rejestracji</b>
        <form className={styles.form}>
          <div className={styles.radioBtns}>
            <div>
              <input type='radio' id='gotAcc' name='accOptions'></input>
              <label htmlFor='gotAcc'>Mam konto</label>
            </div>
            <div>
              <input type='radio' id='noAcc' name='accOptions'></input>
              <label htmlFor='noAcc'>Nie mam konta</label>
            </div>
          </div>
          <div className={styles.userData}>
            <input
              className='form-control'
              {...register('firstName')}
              placeholder='First Name'
            />
            <small className={errors.firstName ? styles.errorMessage : ''}>
              {errors.firstName && errors.firstName.message}
            </small>

            <input
              className='form-control'
              {...register('lastName')}
              placeholder='Last Name'
            />
            <small className={errors.lastName ? styles.errorMessage : ''}>
              {errors.lastName && errors.lastName.message}
            </small>

            <input
              className='form-control'
              {...register('email')}
              placeholder='Email *'
            />
            <small className={errors.email ? styles.errorMessage : ''}>
              {errors.email && errors.email.message}
            </small>

            <input
              type={passwordVisibility}
              className='form-control'
              {...register('password')}
              placeholder='Password *'
            />
            <small className={errors.password ? styles.errorMessage : ''}>
              {errors.password && errors.password.message}
            </small>

            <input
              type={passwordVisibility}
              className='form-control'
              {...register('confirmPassword')}
              placeholder='Confirm Password *'
            />
            <small className={errors.confirmPassword ? styles.errorMessage : ''}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </small>
          </div>

          {/* bootstrap 4.3. switch */}
          <div className={styles.switch}>
            <div
              onChange={e => togglePasswordVisibility(e)}
              className='custom-control custom-switch'
            >
              <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitch1'
              ></input>
              <label className='custom-control-label' htmlFor='customSwitch1'>
                Pokaż hasło
              </label>
            </div>
          </div>
          {/* bootstrap 4.3. switch */}

          <div className={styles.checkboxBtns}>
            <div>
              <input type='checkbox' id='checkAll' onChange={toggleCheckAll} />
              <label htmlFor='checkAll'>
                <b>Zaznacz wyszystko</b>
              </label>
            </div>

            {list.map(box => (
              <CheckBox
                key={box.id}
                id={box.id}
                text={box.text}
                isChecked={check.includes(box.id)}
                action={toggleCheck}
              ></CheckBox>
            ))}
          </div>
          <div className={styles.formButtons}>
            <Link to='/'>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              <button className={styles.previousBtn}>Wróć</button>
            </Link>
            <Link to='/'>
              <button
                className={styles.submitBtn}
                type='submit'
                onClick={handleSubmit(onSubmitHandler)}
              >
                Zarejestruj się
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
