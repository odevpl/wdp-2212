import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrandsButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandsButton = props => {
  return (
    <button className={styles.brandsButton}>
      <FontAwesomeIcon
        icon={props.arrowDirection}
        className={styles.brandsIcon}
      ></FontAwesomeIcon>
    </button>
  );
};

BrandsButton.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  arrowDirection: PropTypes.object,
};

export default BrandsButton;
