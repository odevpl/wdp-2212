import React from 'react';
import Brands from '../../layout/Brands/Brands';
import Banner from '../../features/Banner/Banner';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import DealsContainer from '../../layout/Deals/DealsContainer';
import { Feedback } from '../../features/Feedback/Feedback';
import Gallery from '../../features/Gallery/Gallery';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <FeatureBoxes />
    <DealsContainer />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
