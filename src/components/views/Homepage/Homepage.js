import React from 'react';
import Brands from '../../layout/Brands/Brands';
import MainBlog from '../../layout/MainBlog/MainBlog';
import Banner from '../../features/Banner/Banner';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/Promotion';
import DealsContainer from '../../layout/Deals/DealsContainer';
import { Feedback } from '../../features/Feedback/Feedback';
import Gallery from '../../features/Gallery/Gallery';
import ChatBot from '../../features/ChatBot/ChatBot';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <Promotion />
    <FeatureBoxes />
    <DealsContainer />
    <NewFurniture />
    <Gallery />
    <ChatBot />
    <MainBlog />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
