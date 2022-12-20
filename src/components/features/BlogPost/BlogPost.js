import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './BlogPost.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const BlogPost = props => {
  return (
    <div>
      <img className={styles.photo} src={props.image} alt='furniture' />
      <div className='row'>
        <div className='col-6'>
          <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
        </div>
        <div className='col-6'>
          <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
        </div>
        <div className={styles.buttonMainBlog}>
          <Button variant='medium'>Read More</Button>
        </div>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
};

export default BlogPost;
