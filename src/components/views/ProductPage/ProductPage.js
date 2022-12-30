import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpand,
  faExpandAlt,
  faExpandArrowsAlt,
  faStar as blackStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBasket,
  faExchangeAlt,
  faMinus,
  faPlus,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedin,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { getProductById } from '../../../redux/productsRedux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import shortid from 'shortid';
import Reviews from '../../features/Reviews/Reviews';

const ProductPage = props => {
  const { productId } = useParams();
  const product = useSelector(products => getProductById(products, productId));

  console.log(product);
  const stars = [];

  const starsArray = () => {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      counter++;
      if (counter <= product.stars) {
        stars.push(
          <FontAwesomeIcon key={shortid()} icon={blackStar}></FontAwesomeIcon>
        );
      }
      if (counter > product.stars) {
        stars.push(
          <FontAwesomeIcon key={shortid()} icon={emptyStar}></FontAwesomeIcon>
        );
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
          <div className={styles.largeImage}>
            <img src={product.photo} alt={product.name} />
            <Button
              variant='small'
              className={styles.iconTransparent + ' ' + styles.photoButton}
            >
              <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.smallGallery}>
            <Button
              variant='small'
              className={styles.iconTransparent + ' ' + styles.smallGalleryButtonLeft}
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <img
              src={'https://loremflickr.com/100/110'}
              className={styles.gallerySmallImage}
              alt={product.name}
            />
            <img
              src={'https://loremflickr.com/100/110'}
              className={styles.gallerySmallImage}
              alt={product.name}
            />
            <img
              src={'https://loremflickr.com/100/110'}
              className={styles.gallerySmallImage}
              alt={product.name}
            />
            <img
              src={'https://loremflickr.com/100/110'}
              className={styles.gallerySmallImage}
              alt={product.name}
            />
            <Button
              variant='small'
              className={styles.iconTransparent + ' ' + styles.smallGalleryButtonRight}
            >
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.titleSection}>
            <div>
              <h2>{product.name}</h2>
            </div>
            <div className={styles.titleButtonSection}>
              <Button variant='small' className={styles.iconTransparent}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small' className={styles.iconTransparent}>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className={styles.favoriteSection}>
            {stars.map(item => item)} <span>(0 review) Add Your Review</span>
          </div>
          <div className={styles.price + ' ' + styles.priceSection}>
            <div className={styles.price}>
              {checkOldPrice()}
              <Button noHover variant='small'>
                $ {product.price}
              </Button>
            </div>
          </div>
          <div className={styles.addToCartSection}>
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </Button>
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
            </Button>
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.quantitySection}>
            <span>Quantity:</span>
            <input type='text' className={styles.productQuantity} defaultValue='1' />
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </Button>
            <Button variant='small' className={styles.iconTransparent}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.overviewSection}>
            <div>
              <b>Quick Overview</b>
            </div>
            <p>
              Polskie słowa są zazwyczaj dużo dłuższe, niż angielskie czy łacińskie. Ma
              to ogromny wpływ na wygląd nagłówków czy łamanie się tekstu w węższych
              kolumnach. Do tego mnogość ogonków nad i pod literami sprawia, że inaczej
              wygląda odstęp między liniami.
            </p>
          </div>
          <div className={styles.availbilitySection}>
            <div className={styles.availbilityPoints}>
              <b>Availability: &nbsp;</b>In Stock
            </div>
            <div className={styles.availbilityPoints}>
              <b>Category: &nbsp;</b>
              <p>Furniture</p>
            </div>
          </div>
          <div className={styles.socialSection}>
            <button variant='small' className={styles.iconSocialFacebook}>
              <FontAwesomeIcon
                icon={faFacebookF}
                className={styles.facebook}
              ></FontAwesomeIcon>{' '}
              Share
            </button>
            <button variant='small' className={styles.iconSocialYT}>
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.youtube}
              ></FontAwesomeIcon>{' '}
              Youtube
            </button>
            <button variant='small' className={styles.iconSocialGoogle}>
              <FontAwesomeIcon
                icon={faGooglePlusG}
                className={styles.google}
              ></FontAwesomeIcon>{' '}
              Google+
            </button>
            <button variant='small' className={styles.iconSocialTwitter}>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.twitter}
              ></FontAwesomeIcon>{' '}
              Tweet
            </button>
            <button variant='small' className={styles.iconSocialPinterest}>
              <FontAwesomeIcon
                icon={faPinterestP}
                className={styles.pinterest}
              ></FontAwesomeIcon>{' '}
              Pinterest
            </button>
            <button variant='small' className={styles.iconSocialLinkedin}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.linkedin}
              ></FontAwesomeIcon>{' '}
              Linkedin
            </button>
          </div>
          <div>
            <Reviews />
          </div>
        </div>
      </div>
      <NewFurniture amount={4} />
    </div>
  );
};

export default ProductPage;
