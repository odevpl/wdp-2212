import styles from './CartPage.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const CartPage = () => {
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
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.remove} icon={faTimes} />
                <div className={styles.productImage}></div>
                Placeholder Product 7
              </th>
              <td className='align-middle'>$5.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$5.00</td>
            </tr>
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.remove} icon={faTimes} />
                <div className={styles.productImage}></div>
                Placeholder Product 4
              </th>
              <td className='align-middle'>$67.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$67.00</td>
            </tr>
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.remove} icon={faTimes} />
                <div className={styles.productImage}></div>
                Placeholder Product 8 - Black, Amber 65
              </th>
              <td className='align-middle'>$20.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$20.00</td>
            </tr>
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
          <p>$92.00</p>
        </div>
        <div className={styles.total}>
          <h5>Total</h5>
          <p>$92.00</p>
        </div>
        <Link to={`/`} className={styles.checkout}>
          <Button className={styles.checkout}>PROCEED TO CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
