import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import BrandsButton from '../../common/BrandsButton/BrandsButton';
import Container from '../../common/Container/Container';
import Brand from '../../features/Brand/Brand';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = props => {
  const brands = useSelector(getAllBrands);
  const [activePage, ActivePage] = useState(0);

  let newRwd = 0;
  const rwd = window.innerWidth;
  if (rwd >= 576 && rwd < 768) {
    newRwd = 4;
  } else if (rwd >= 0 && rwd < 576) {
    newRwd = 2;
  } else {
    newRwd = 6;
  }

  //sdf/sdfsfdsfds
  const pagesCount = Math.ceil(brands.length / newRwd);
  const leftAction = e => {
    e.preventDefault();
    ActivePage(activePage < pagesCount - 1 ? activePage + 1 : activePage);
  };

  const rightAction = e => {
    e.preventDefault();
    ActivePage(activePage > 0 ? activePage - 1 : activePage);
  };

  return (
    <Container>
      <div className={styles.brandsSection}>
        <div className={styles.brandsWrapper}>
          <button className={styles.brandbutton} variant='carousel' onClick={leftAction}>
            <BrandsButton arrowDirection={faChevronLeft} />
          </button>
          {brands
          .slice(activePage * newRwd, (activePage + 1) * newRwd)
          .map(brand => (
            <Brand {...brand} key={brand.id} />
          ))}
          <button className={styles.brandbutton} variant='carousel'  onClick={rightAction}>
            <BrandsButton arrowDirection={faChevronRight} />
          </button>
        </div>
      </div>
    </Container>
  );
};

Brands.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default Brands;
