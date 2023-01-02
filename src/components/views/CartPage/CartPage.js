import styles from './CartPage.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateSubtotalPrice,
  getAll,
  getSubtotalPrice,
  getTotalPrice,
  calculateTotalPrice,
  removeAllProducts,
} from '../../../redux/cartRedux';
import { SingleCartProduct } from '../../features/SingleCartProduct/SingleCartProduct';

const CartPage = () => {
  const cartProductsList = useSelector(getAll);
  const dispatch = useDispatch();
  const subtotal = useSelector(getSubtotalPrice);
  const total = useSelector(getTotalPrice);

  const handleProceedToCheckout = e => {
    e.preventDefault();
    dispatch(removeAllProducts());
    dispatch(calculateSubtotalPrice());
    dispatch(calculateTotalPrice());
  };

  return (
    <div className={styles.root}>
      <div className={styles.topPage}>
        <h3>Cart</h3>
        <div className={styles.rightPage}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          <p>Cart</p>
        </div>
      </div>
      <div className={styles.cart}>
        <table className='table'>
          <thead className={styles.tableBanner}>
            <tr>
              <th scope='col' className='align-middle text-center'>
                PRODUCT
              </th>
              <th scope='col' className='align-middle text-left pl-3'>
                PRICE
              </th>
              <th scope='col' className='align-middle text-left'>
                QUANTITY
              </th>
              <th scope='col' className='align-middle text-center pl-3'>
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {cartProductsList.map(product => {
              return (
                <SingleCartProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  photo={product.photo}
                  amount={product.amount}
                />
              );
            })}
          </tbody>
        </table>
        <div className={styles.couponCode}>
          <input type='text' placeholder='Coupon code'></input>
          <Button className={styles.code} variant='small'>
            APPLY COUPON
          </Button>
          <Button className={styles.update} variant='small'>
            UPDATE CART
          </Button>
        </div>
      </div>
      <div className={styles.cartTotals}>
        <h3>Cart totals</h3>
        <div className={styles.subtotal}>
          <h5>Subtotal</h5>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className={styles.total}>
          <h5>Total</h5>
          <p>${total.toFixed(2)}</p>
        </div>
        <Link to={`/`} className={styles.checkout}>
          <Button
            className={styles.checkout}
            onClick={e => {
              handleProceedToCheckout(e);
            }}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
