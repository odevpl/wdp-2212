import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { favoriteProduct } from '../../../redux/productsRedux';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompareList,
  addToCompareList,
  removeFromCompareList,
} from '../../../redux/compareListRedux';
import { toggleCompare, getAll } from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';
import { Modal } from 'react-bootstrap';
import { changeComparedProductFavoriteStatus } from '../../../redux/compareListRedux';
import { addProduct } from '../../../redux/cartRedux';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  photo,
  userStars,
  favorite,
  id,
  compare,
  category,
}) => {
  const dispatch = useDispatch();
  const compareList = useSelector(getCompareList);

  const checkOldPrice = () => {
    if (oldPrice !== undefined) {
      return <div className={styles.oldPrice}>$ {oldPrice}</div>;
    }
  };

  const data = JSON.parse(localStorage.getItem("'fav-" + id + "'"));
  const [fav, setFav] = useState(data);

  useEffect(() => {
    if (fav) {
      localStorage.setItem("'fav-" + id + "'", JSON.stringify(true));
    } else if (!fav) {
      localStorage.removeItem("'fav-" + id + "'");
    }
  }, [fav, id]);

  const handleClickFavorite = id => {
    dispatch(favoriteProduct(id));
    dispatch(changeComparedProductFavoriteStatus(id));
    setFav(!fav);
  };

  const handleAddToCompare = e => {
    e.preventDefault();
    if (!compare) {
      if (compareList.length >= 4) {
        return alert(`can't add more products to comparison`);
      } else {
        dispatch(toggleCompare(id));
        dispatch(
          addToCompareList({
            id,
            name,
            price,
            photo,
            favorite,
            oldPrice,
          })
        );
      }
    } else {
      dispatch(toggleCompare(id));
      dispatch(removeFromCompareList(id));
    }
  };

  // popup Modal buttons
  const [show, setShow] = useState(false);
  const hideModal = () => setShow(false);
  const handleModalOpen = e => {
    e.preventDefault();
    setShow(true);
  };

  // add to cart button action
  const handleAddToCart = (e, id, name, price, photo) => {
    e.preventDefault();
    dispatch(addProduct({ id, name, price, photo }));
  };

  return (
    <div className={styles.root}>
      <Modal
        className={styles.popupModal}
        show={show}
        onHide={hideModal}
        animation={false}
        centered
      >
        <Modal.Header className={styles.popupHeader} closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.popupBody}>
          <div className={styles.popupImgBox}>
            <img className={styles.popupImg} src={photo} alt='furniture'></img>
          </div>
          <div className={styles.popupInfoBox}>
            <div>
              {oldPrice ? (
                <p>
                  Old Price: <span className={styles.popupOldPrice}>{oldPrice}$</span>
                </p>
              ) : (
                ''
              )}
              <p className={styles.popupPrice}>Price: {price}$</p>
              <p>Category: {category}</p>
              <p>Rating: {stars}/5</p>
              {userStars ? <p>Your rating: {userStars}/5</p> : ''}
              {promo ? <p className={styles.popupPromo}>Promotion: {promo}</p> : ''}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className={styles.photo}>
        <Link to={`/product/${id}`}>
          <img src={photo} alt='furniture' />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small' onClick={handleModalOpen}>
            Quick View
          </Button>
          <Button
            variant='small'
            onClick={e => {
              handleAddToCart(e, id, name, price, photo);
            }}
          >
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            favorite={fav}
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
  userStars: PropTypes.number,
  category: PropTypes.string,
};

export default ProductBox;
