import React from 'react';
import Container from '../../common/Container/Container';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.bannerGroup + ' col-12 '}>
          <div>
            <p className={styles.titleTop}>
              bedroom<span> furniture</span>
            </p>
          </div>
          <div>
            <p className={styles.titleBottom}>
              <span className={styles.alwaysSpan}>always </span>
              <span className={styles.span}> 25% </span> off or more
            </p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>
            Home <span className={styles.speciaSign}>&gt;</span>{' '}
            <span className={styles.bottomBarColor}>Furniture</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
