import React from 'react';
import styles from './FilterByColor.module.scss';

const FilterByColor = () => {
  return (
    <div>
      <h4 className='m-2'>FILTER BY COLOR</h4>
      <div className='col my-3'>
        <div className={styles.container}>
          <input type='checkbox' id='cb1'></input>
          <label htmlFor='cb1'>Red</label>
        </div>
        <div className={styles.container}>
          <input type='checkbox' id='cb2'></input>
          <label className={styles.black} htmlFor='cb2'>
            Black
          </label>
        </div>
        <div className={styles.container}>
          <input type='checkbox' id='cb4'></input>
          <label className={styles.blue} htmlFor='cb4'>
            Blue
          </label>
        </div>
        <div className={styles.container}>
          <input type='checkbox' id='cb5'></input>
          <label className={styles.pink} htmlFor='cb5'>
            Pink
          </label>
        </div>
        <div className={styles.container}>
          <input type='checkbox' id='cb6'></input>
          <label className={styles.green} htmlFor='cb6'>
            Green
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByColor;
