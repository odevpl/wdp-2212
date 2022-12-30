import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Brands from '../../layout/Brands/Brands';
import FilterBySize from '../FilterBySize/FilterBySize';
import FilterByCategories from '../FilterByCategories/FilterByCategories';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ChatBot from '../../features/ChatBot/ChatBot';
import Banner from '../../features/Banner/Banner';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'><Banner /></div>
        </div>
        <div className='row'>
          <div className='col-9'><NewFurniture amount={12} /></div>
          <div className='col-3'>
          <FilterByCategories />
          <FilterBySize />
          </div>
        </div>
        <div className='row'>
          <div className='col'><Brands /></div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
