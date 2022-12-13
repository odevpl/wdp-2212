import React from 'react';
import styles from './Promotion.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Promotion = (photo1, photo2) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className={styles.leftColumn}>
              <div className={styles.header}>
                <h3>Hot Deals</h3>
              </div>
              <div className={styles.photo1}>
                <img src={photo1} alt='photo1' />
                <div className={styles.addCart}>
                  <Button variant='small' className={styles.addToCartBtn}>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    <span>ADD TO CART</span>
                  </Button>
                </div>
                <div className={styles.timer}>
                  <ul className={styles.time}>
                    <li>
                      <h5>25</h5>
                      <p>DAYS</p>
                    </li>
                    <li>
                      <h5>10</h5>
                      <p>HRS</p>
                    </li>
                    <li>
                      <h5>55</h5>
                      <p>MINS</p>
                    </li>
                    <li>
                      <h5>30</h5>
                      <p>SECS</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.buttons}></div>
            </div>
          </div>
          <div className='col-7'>
            <div className={styles.rightColumn}>
              <div className={styles.photo2}>
                <img src={photo2} alt='photo2' />
                <div className={styles.text}>
                  <h2>
                    <span>INDOOR</span> FURNITURE
                  </h2>
                  <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                </div>
                <div className={styles.shop}>
                  <Button variant='small' className={styles.shopBtn}>
                    <span>SHOP NOW</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
