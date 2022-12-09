import React from 'react';
import { useState } from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [cartAmount, setCartAmount] = useState(123);
  const checkCartAmount = amount => {
    if (amount < 0) {
      setCartAmount(0);
    }
    if (amount > 99999) {
      setCartAmount(99999);
    }
  };
  checkCartAmount(cartAmount);

  return (
    <div className={`col text-right ${styles.cart}`}>
      <a href='#' className={styles.cartBox}>
        <div className={styles.cartIcon}>
          <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
        </div>
        <div className={styles.cartCounter}>
          <div>{cartAmount}</div>
        </div>
      </a>
    </div>
  );
};

export default Cart;
