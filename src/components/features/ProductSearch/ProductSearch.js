import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {

  const categories = useSelector(getAll);

  return (

    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        {/* <select name='' id=''>
        <option value=''>Select a category</option>
      </select> */}
        {console.log('categories', categories)}
        <div>
          <ul><div>Select a category</div>
            { categories.map(category => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>

        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default ProductSearch;
