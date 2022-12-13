import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Brand/Brand.module.scss';

const Brand = ({ id, alt, image }) => {
  return (
    <div className={styles.brandElement}>
      <img src={image} alt={alt} />
    </div>
  );
};

Brand.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Brand;
