import styles from './SingleCartProduct.module.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import {
  changeProductAmount,
  removeProduct,
  calculateSubtotalPrice,
  calculateTotalPrice,
} from '../../../redux/cartRedux';
import PropTypes from 'prop-types';

export const SingleCartProduct = ({ name, id, photo, price, amount }) => {
  const dispatch = useDispatch();

  let [productAmount, setAmount] = useState(amount);

  useEffect(() => {
    dispatch(calculateSubtotalPrice());
    dispatch(calculateTotalPrice());
  }, [dispatch, amount]);

  const handleIncrease = e => {
    e.preventDefault();
    if (productAmount >= 999) {
      setAmount(999);
      dispatch(changeProductAmount({ id, productAmount: 999 }));
    } else {
      setAmount(++productAmount);
      dispatch(changeProductAmount({ id, productAmount }));
    }
  };
  const handleDecrease = e => {
    e.preventDefault();
    if (productAmount <= 0) setAmount(0);
    else {
      setAmount(--productAmount);
      dispatch(changeProductAmount({ id, productAmount }));
    }
  };

  const handleChange = e => {
    if (Number(e.target.value) >= 999) {
      setAmount(999);
      dispatch(changeProductAmount({ id, productAmount: 999 }));
    } else if (Number(e.target.value) < 0 || isNaN(e.target.value)) {
      setAmount(0);
      dispatch(changeProductAmount({ id, productAmount: 0 }));
    } else {
      setAmount(Number(e.target.value));
      dispatch(changeProductAmount({ id, productAmount: Number(e.target.value) }));
    }
  };

  const handleRemoveProduct = (e, id) => {
    e.preventDefault();
    dispatch(removeProduct(id));
    dispatch(calculateSubtotalPrice());
    dispatch(calculateTotalPrice());
  };

  return (
    <tr key={name}>
      <th scope='row' className={styles.product}>
        <FontAwesomeIcon
          className={styles.remove}
          icon={faTimes}
          onClick={e => handleRemoveProduct(e, id)}
        />
        <div className={styles.productImage}>
          <img src={photo} alt='furniture in the cart' />
        </div>
        {name}
      </th>
      <td className='align-middle'>${Number(price).toFixed(2)}</td>
      <td className='align-middle'>
        <div className={styles.quantity}>
          <Button className={styles.button1} variant='outline' onClick={handleIncrease}>
            +
          </Button>
          <div className={styles.number}>
            <input onChange={handleChange} value={productAmount}></input>
          </div>
          <Button className={styles.button2} variant='outline' onClick={handleDecrease}>
            -
          </Button>
        </div>
      </td>
      <td className='align-middle text-center pl-5'>
        ${(productAmount * price).toFixed(2)}
      </td>
    </tr>
  );
};

SingleCartProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
  id: PropTypes.string,
  amount: PropTypes.number,
};
