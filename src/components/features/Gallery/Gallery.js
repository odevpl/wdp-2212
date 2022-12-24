import React from 'react';
import styles from './Gallery.module.scss';
import { getAll } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import shortid from 'shortid';

const Gallery = () => {
  const products = useSelector(getAll);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 pl-0'>
          <div className={styles.heading}>
            <h3>Furniture Gallery</h3>
          </div>
          <div className={'col ' + styles.menu}>
            <ul>
              <li>
                <a href='#'>FEATURED</a>
              </li>
              <li className={styles.active}>
                <a href='#' className={styles.active}>
                  TOP SELLER
                </a>
              </li>
              <li>
                <a href='#'>SALE OFF</a>
              </li>
              <li>
                <a href='#'>TOP RATED</a>
              </li>
            </ul>
          </div>
          <div className={styles.photoContainer}>
            <div className={styles.buttons}>
              <Button title='Add to favorties' variant='small'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button title='Compare' variant='small'>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
              <Button title='Add to cart' variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
              </Button>
              <Button variant='small'>
                <FontAwesomeIcon title='Quick view' icon={faEye}>
                  Favorite
                </FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.price}>
                <div>${products[1].price}</div>
                <div className={styles.oldPrice}>${products[1].oldPrice}</div>
              </div>
              <div className={styles.name}>
                <div>{products[1].name}</div>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= products[1].stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <img
              className={styles.photo}
              src={`${products[1].photo}`}
              alt='furniture'
            ></img>
          </div>
          <div className={styles.sliderWrapper}>
            <Button variant='main'>&lt;</Button>
            <div className={styles.slider}>
              {products.map(product => (
                <img key={shortid()} src={`${product.photo}`} alt='furniture'></img>
              ))}
            </div>
            <Button variant='main'>&gt;</Button>
          </div>
        </div>
        <div className={'col-6 ' + styles.offer}>
          <div className={styles.promotion}>
            <div className={styles.promotionBox}>
              FROM <span>$50.00</span>
              <p>Bedroom Bed</p>
              <Button variant='main'>SHOP NOW</Button>
            </div>
          </div>
          <img
            className={styles.photo}
            alt='furniture'
            src='https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
