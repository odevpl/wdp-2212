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
              always <span>25%</span> off or more
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
