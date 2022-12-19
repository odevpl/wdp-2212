import React from 'react';

// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className='col text-left'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <Link to={`/cart`}>
          {
            <div className={`col text-right ${styles.cart}`}>
              <a href='#' className={styles.cartBox}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
                <div className={styles.cartCounter}>123</div>
              </a>
            </div>
          }
        </Link>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default CompanyClaim;
