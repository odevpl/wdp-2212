import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolder, faUser } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>Testing bootstrap col-9</div>
          <div className='col-3'>
            <div className={styles.searchInput}>
              <input type='text' placeholder='Search...' />
            </div>
            <div>
              <div>
                <p>Recent Post</p>
              </div>
            </div>
            <ul className={styles.blogUl}>
              <li>Post 12</li>
              <li>Post 9</li>
              <li>Post 6</li>
              <li>Post 3</li>
              <li>Post</li>
            </ul>
            <div>
              <p>Recent Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
