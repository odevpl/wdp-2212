import React from 'react';
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

  return (
    <Container>
      <div className={styles.brandsSection}>
        <BrandsButton arrowDirection={faChevronLeft} />
        {brands.map(brand => (
          <Brand {...brand} key={props.id} />
        ))}
        <BrandsButton arrowDirection={faChevronRight} />
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
