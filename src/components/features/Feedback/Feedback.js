import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Feedback.module.scss';
import { getClientFeedback } from '../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

export const Feedback = () => {
  const feedbackList = useSelector(getClientFeedback);
  const [activePage, setActivePage] = useState(0);

  const handleSetActivePage = page => setActivePage(page);

  const dots = [];
  for (let i = 0; i < feedbackList.length; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handleSetActivePage(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  const leftAction = () => {
    handleSetActivePage(activePage +1);
    if(activePage >= 0 (feedbackList) -1) {
      handleSetActivePage(activePage);
    }
  };

  const rightAction = () => {
    handleSetActivePage(activePage -1);
    if(activePage <= 0) {
      handleSetActivePage(activePage);
    }
  };

  return (
<Swipeable rightAction={rightAction} leftAction={leftAction}>
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col '}></div>
            <div className={'col-auto ' + styles.dots}>{<ul>{dots}</ul>}</div>
          </div>
        </div>
        <div className={styles.feedbackBox}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
          </div>
          {feedbackList.slice(activePage, activePage + 1).map(item => (
            <div key={item.clientId}>
              <div className={styles.textBox}>
                <p>{item.clientText}</p>
              </div>
              <div className={styles.clientDataBox}>
                <div className={styles.imgBox}>
                  <img
                    className={styles.img}
                    src={item.clientPhoto}
                    alt='face of our client'
                  ></img>
                </div>
                <div className={styles.nameBox}>
                  <p>
                    <b>{item.clientName}</b>
                  </p>
                  <p>{item.clientJob}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Swipeable>
  );
};
