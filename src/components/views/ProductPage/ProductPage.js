import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as blackStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { getProductById } from '../../../redux/productsRedux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import shortid from 'shortid';

const ProductPage = props => {
  const { productId } = useParams(); 
  const product = useSelector(products => getProductById(products, productId));

  console.log(product);
  const stars = [];

  const starsArray = () => {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      counter++; 
      if(counter <= product.stars) {
        stars.push(<FontAwesomeIcon key={shortid()} icon={blackStar}></FontAwesomeIcon>);
      }
      if(counter > product.stars) {
        stars.push(<FontAwesomeIcon key={shortid()} icon={emptyStar}></FontAwesomeIcon>);
      }
    }
  };

  starsArray();

  const checkOldPrice = () => {
    if (product.oldPrice !== undefined) {
      return <div className={styles.oldPrice}>$ {product.oldPrice}</div>;
    }
  };

  return (
    <div className={styles.container}>
    
      <div className={styles.section}>
        <div className={styles.gallery}>

        </div>
        <div className={styles.productDetails}>
          <div className={styles.titleSection}>
            <h2>{product.name}</h2>
          </div>
          <div className={styles.favoriteSection}>
            {stars.map(item => item)} <span>(0 review) Add Your Review</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price}>
              {checkOldPrice()}
              <Button noHover variant='small'>
                $ {product.price}
              </Button>
            </div>
          </div>
          <div className={styles.addToCartSection}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Button>
          </div>

        </div>
      </div>
     
    </div>
  );
};

export default ProductPage;