import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Swipeable = ({ leftAction, rightAction, children }) => (
  <div className={styles.root}>
    <div className={styles.icons}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faChevronLeft}
        onClick={leftAction}
      />
      <FontAwesomeIcon
        className={styles.icon}
        icon={faChevronRight}
        onClick={rightAction}
      />
    </div>
    {children}
  </div>
);

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
