import React from 'react';
import { useSelector } from 'react-redux';
import { getCompareList, removeFromCompareList } from '../../../redux/compareListRedux';
import styles from './CompareBar.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCompare } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

export const CompareBar = () => {
  const dispatch = useDispatch();
  let compareList = useSelector(getCompareList);

  const handleRemoveFomCompareList = (e, item) => {
    e.preventDefault();
    dispatch(toggleCompare(item.id));
    dispatch(removeFromCompareList(item.id));
  };

  return (
    <div>
      {compareList.length > 0 ? (
        <div className={styles.stickyBar}>
          <div className={styles.photos}>
            {compareList.map(item => (
              <div
                onClick={e => handleRemoveFomCompareList(e, item)}
                className={styles.photoContainer}
                key={item.id}
              >
                <img
                  className={styles.photo}
                  src={item.photo}
                  alt='furniture to compare'
                ></img>
                <div className={styles.removeIconBox}>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className={styles.removeIcon}
                  ></FontAwesomeIcon>
                </div>
                <div className={styles.textBox}>
                  <p>{item.name}</p>
                  {item.oldPrice && (
                    <p className={styles.oldPrice}>old price: {item.oldPrice}$</p>
                  )}
                  <p>price: {item.price}$</p>
                  {item.favorite && <p>Your favorite!</p>}
                </div>
              </div>
            ))}
            <div>
              {compareList.length > 1 ? (
                <button className={styles.compareButton}>Compare</button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
