import React from 'react';
import styles from './FilterBySize.module.scss';

const FilterBySize = () => {
  return (
    <>
      <h4 className='m-2'>FILTER BY SIZE</h4>
      <div className='col my-3 '>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <label className={styles.container}>
            <input type='checkbox' />
            <span className={styles.choice}></span>
          </label>
          <p className={styles.text}>S</p>
          <p className={'ml-auto ' + styles.number}>3</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <label className={styles.container}>
            <input type='checkbox' />
            <span className={styles.choice}></span>
          </label>
          <p className={styles.text}>M</p>
          <p className={'ml-auto ' + styles.number}>4</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <label className={styles.container}>
            <input type='checkbox' />
            <span className={styles.choice}></span>
          </label>
          <p className={styles.text}>L</p>
          <p className={'ml-auto ' + styles.number}>5</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <label className={styles.container}>
            <input type='checkbox' />
            <span className={styles.choice}></span>
          </label>
          <p className={styles.text}>XL</p>
          <p className={'ml-auto ' + styles.number}>7</p>
        </div>
        <div
          className={'row d-flex justify-content-between mx-auto ' + styles.lineWrapper}
        >
          <label className={styles.container}>
            <input type='checkbox' />
            <span className={styles.choice}></span>
          </label>
          <p className={styles.text}>XX</p>
          <p className={'ml-auto ' + styles.number}>2</p>
        </div>
      </div>
    </>
  );
};

export default FilterBySize;