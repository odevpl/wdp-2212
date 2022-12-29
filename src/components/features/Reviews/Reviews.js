import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Reviews.module.scss';

class Reviews extends React.Component {
  render(stars) {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.tableTabs}>
              <ul>
                <li>
                  <Button>DESCRIPTION</Button>
                </li>
                <li className={styles.active}>
                  <Button>REVIEWS (0)</Button>
                </li>
                <li>
                  <Button>SPECIFICATION</Button>
                </li>
                <li>
                  <Button>CUSTOM TAB</Button>
                </li>
              </ul>
            </div>
            <div className={styles.tableContent}>
              <p>There are no reviews for this product.</p>
              <p className={styles.add}>Add a review</p>
              <p>Your Rating</p>
              <div className={styles.rating}>
                <p>Bad</p>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='/#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
                <p>Good</p>
              </div>
              <form>
                <p>Your Review</p>
                <textarea className={styles.textArea} rows='5' placeholder='' />
                <div className={styles.inputsWrapper}>
                  <input type='text' placeholder='Name*' />
                  <input type='email' placeholder='Email*' />
                  <Button className={styles.buttonContinue} variant='main'>
                    CONTINUE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
