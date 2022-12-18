import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [showNavStatus, setShowNavSatatus] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className={'col-auto order-lg-0 order-1' + styles.searchbar}>
            <ProductSearch />
          </div>
          <button
            className={styles.bars}
            onClick={() => setShowNavSatatus(!showNavStatus)}
          >
            <a href='#'>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </a>
          </button>
          <div className={'col-auto ' + styles.menu}>
            <ul className={showNavStatus ? styles.active : styles.nonactive}>
              <li>
                <Link to='/' className={styles.active}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/shop/furniture'>Furniture</Link>
              </li>
              <li>
                <Link to='/shop/chair'>Chair</Link>
              </li>
              <li>
                <Link to='/shop/table'>Table</Link>
              </li>
              <li>
                <Link to='/shop/sofa'>Sofa</Link>
              </li>
              <li>
                <Link to='/shop/bedroom'>Bedroom</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
