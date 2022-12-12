import React from 'react';
// import PropTypes from 'prop-types';
import Brands from '../../layout/Brands/Brands';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
