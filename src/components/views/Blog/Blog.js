import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolder, faUser } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className={styles.root + ' ' + styles.blogSection}>
      <div className={'container'}>
        <div className='row'>
          <div className='col-9'>
            <div className={styles.postTitle}>Witamy na nowej stronie sklepu!</div>
            <img
              className={styles.blogImg}
              src='https://images.pexels.com/photos/14613456/pexels-photo-14613456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1h'
              alt='furniture'
            />
            <p>
              Niskiej temperaturze. Cieni żelaznej ręce do tyłu i stając
              niewspółmierność, szczególnie dolegał przypomniał sobie, nie przyjęliby go
              do Instytutu. Na zakręcała, unosił się, Ośla Łączka walczył i biegu
              jałowego oraz regulator lub gazowymi komplet sześć w opustoszałej głowie
              jakichś paragrafów razem z fotelem że w kieszonce od zegarka zapomniana.
            </p>
            <div className={styles.blogInfoSection + ' row'}>
              <div className={styles.postInfoSection + ' col-9'}>
                <div>
                  <a href='#'>
                    <FontAwesomeIcon icon={faUser} />
                    <span> admin </span>
                    <span style={{ marginLeft: '.5rem' }} />
                  </a>
                </div>
                <div>
                  <a href='#'>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span> June 15.16 </span>
                    <span style={{ marginLeft: '.5rem' }} />
                  </a>
                </div>
                <div>
                  <a href='#'>
                    <FontAwesomeIcon icon={faFolder} />
                    <span> Just usual </span>
                    <span style={{ marginLeft: '.5rem' }} />
                  </a>
                </div>
              </div>
              <div className={styles.readMoreSection + ' col-3'}>
                <p>Read More...</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className={styles.searchInput}>
              <input type='text' placeholder='Search...' />
            </div>

            <ul className={styles.blogUl}>
              <li className={styles.sectionTitle}>Recent Posts</li>
              <li>Post 9</li>
              <li>Post 6</li>
              <li>Post 3</li>
              <li>Post</li>
            </ul>
            <ul className={styles.blogUl}>
              <li className={styles.sectionTitle}>Recent Comments</li>
            </ul>
            <ul className={styles.blogUl}>
              <li className={styles.sectionTitle}>Archives</li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} /> June
                  2023
                </a>
              </li>
            </ul>
            <ul className={styles.blogUl}>
              <li className={styles.sectionTitle}>Categories</li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} /> Just Usual
                </a>
              </li>
            </ul>
            <ul className={styles.blogUl}>
              <li className={styles.sectionTitle}>Meta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
