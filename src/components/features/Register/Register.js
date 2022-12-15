import React, { useState } from 'react';
import styles from './Register.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CheckBox } from '../../common/CheckBox/CheckBox';

export const Register = () => {
  // submit button action
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
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
        <form className={styles.form} onSubmit={e => handleSubmit(e)} action=''>
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
            <b>Podaj dane do rejestracji</b>
            <input type='text' placeholder='E-mail *'></input>
            <input type={passwordVisibility} placeholder='Hasło *'></input>
            <input type={passwordVisibility} placeholder='Powtórz hasło *'></input>
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
            <button className={styles.submitBtn} type='submit'>
              Zarejestruj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
