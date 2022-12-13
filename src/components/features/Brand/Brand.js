import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Brand/Brand.module.scss';

const Brand = ({ id, image }) => {
  return (
    <div className={styles.brandElement}>
      <img src={image} alt={id} />
    </div>
  );
};

Brand.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
};

export default Brand;
