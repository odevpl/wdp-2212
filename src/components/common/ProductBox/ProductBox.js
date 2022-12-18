import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { favoriteProduct } from '../../../redux/productsRedux';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompareList,
  addToCompareList,
  removeFromCompareList,
} from '../../../redux/compareListRedux';
import { toggleCompare } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  photo,
  favorite,
  id,
  compare,
}) => {
  const dispatch = useDispatch();
  const compareList = useSelector(getCompareList);

  const checkOldPrice = () => {
    if (oldPrice !== undefined) {
      return <div className={styles.oldPrice}>$ {oldPrice}</div>;
    }
  };

  const handleClickFavorite = id => {
    dispatch(favoriteProduct(id));
  };

  const handleAddToCompare = e => {
    e.preventDefault();
    if (!compare) {
      if (compareList.length >= 4) {
        return alert(`can't add more products to comprasion`);
      } else {
        dispatch(toggleCompare(id));
        dispatch(
          addToCompareList({
            id,
            name,
            price,
            photo,
          })
        );
      }
    } else {
      dispatch(toggleCompare(id));
      dispatch(removeFromCompareList(id));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/shop/${id}`}>
          <img src={photo} alt='furniture' />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/shop/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            favorite={favorite}
            variant='outline'
            onClick={e => {
              e.preventDefault();
              handleClickFavorite(id);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={e => handleAddToCompare(e)}
            compare={compare}
            variant='outline'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {checkOldPrice()}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  photo: PropTypes.string,
  id: PropTypes.string,
};

export default ProductBox;
