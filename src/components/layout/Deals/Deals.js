import styles from './Deals.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Deals = ({ Deals }) => (
  <div className={`container ${styles.container}`}>
    <div className='row'>
      <div className={`col-md-6 col-sm-12 ${styles.column}`}>
        <img src={Deals.sofa} alt='sofa' />
        <div className={styles.firstWrapper}>
          <h2>{Deals.info1a}</h2>
          <h1>{Deals.info1b}</h1>
          <p>{Deals.bargain}</p>
        </div>
      </div>
      <div className='col-md-6'>
        <div className={`col-12 ${styles.column1}`}>
          <img src={Deals.officeChair} alt='chair' />
          <div className={styles.secondWrapper}>
            <h1 className={styles.boldText}>{Deals.info2a}</h1>
            <h1>{Deals.info2b}</h1>
            <h5>{Deals.info2c}</h5>
            <p>{Deals.price}</p>
          </div>
        </div>
        <div className={`col-12 ${styles.column2}`}>
          <img src={Deals.bed} alt='bed' />
          <div className={styles.thirdWrapper}>
            <p className={styles.Bold}>{Deals.info3a}</p>
            <p className={styles.Normal}>{Deals.info3b}</p>
            <p className={styles.Info}>{Deals.infoDeal}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Deals.propTypes = {
  Deals: PropTypes.object,
};

export default Deals;
