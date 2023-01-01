import React from 'react';
import styles from './Promotion.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faCaretLeft,
  faCaretRight,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getDeals } from '../../../redux/hotDealsRedux';
import Swipeable from '../../common/Swipeable/Swipeable';

const Promotion = () => {
  const dealsList = useSelector(getDeals);

  const checkOldPrice = () => {
    if (dealsList[0].oldPrice !== undefined) {
      return <div className={styles.oldPrice}>$ {dealsList[0].oldPrice}</div>;
    }
  };

  const leftAction = () => {
    console.log('lewy');
  };

  const rightAction = () => {
    console.log('prawy');
  };

  return (
    <Swipeable rightAction={rightAction} leftAction={leftAction}>
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='d-none d-md-none d-lg-block col-4'>
              <div className={styles.leftColumn}>
                <div className={styles.header}>
                  <h3>Hot Deals</h3>
                </div>
                <div className={styles.dots}>
                  <ul>
                    <li>
                      <a href='#'></a>
                    </li>
                    <li>
                      <a href='#'></a>
                    </li>
                    <li>
                      <a href='#'></a>
                    </li>
                  </ul>
                </div>
                <div className={styles.photo1}>
                  <img className={styles.pic1} src={dealsList[0].photo1} alt='photo1' />
                  <div className={styles.addCart}>
                    <Button variant='small' className={styles.addToCartBtn}>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                      <span>ADD TO CART</span>
                    </Button>
                  </div>
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
                <h5 className={styles.name}>{dealsList[0].name}</h5>
                <div className={styles.content}>
                  <div className={styles.background}>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= dealsList[0].stars ? (
                            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.outlines}>
                    <Button className={styles.option} variant='outline'>
                      <FontAwesomeIcon icon={faEye}>Prewiev</FontAwesomeIcon>
                    </Button>
                    <Button className={styles.option} variant='outline'>
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button className={styles.option} variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                  </div>
                  <div className={styles.price}>
                    {checkOldPrice()}
                    <Button noHover className={styles.priceButton} variant='small'>
                      $ {dealsList[0].price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className={styles.rightColumn}>
                <div className={styles.photo2}>
                  <img className={styles.pic2} src={dealsList[1].photo2} alt='photo2' />
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
                  <div className={styles.buttons}>
                    <Button variant='small' className={styles.left}>
                      <FontAwesomeIcon
                        className={styles.left}
                        icon={faCaretLeft}
                      ></FontAwesomeIcon>
                    </Button>
                    <Button variant='small' className={styles.right}>
                      <FontAwesomeIcon
                        className={styles.right}
                        icon={faCaretRight}
                      ></FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

Promotion.propTypes = {
  photo1: PropTypes.object,
  photo2: PropTypes.object,
  stars: PropTypes.node,
  price: PropTypes.node,
  oldPrice: PropTypes.node,
  name: PropTypes.string,
};

export default Promotion;
