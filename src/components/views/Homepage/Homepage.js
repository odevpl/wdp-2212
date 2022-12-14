import React from 'react';
import Brands from '../../layout/Brands/Brands';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import DealsContainer from '../../layout/Deals/DealsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <DealsContainer />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
