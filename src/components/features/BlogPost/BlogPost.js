import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './BlogPost.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const BlogPost = props => {
  return (
    <div className={styles.root}>
      <div className={styles.imageGroup}>
        <img className={styles.photo} src={props.image} alt='furniture' />
        <div className={styles.iconSectionWrapper}>
          <div className={'row ' + styles.blogPostSubsection}>
            <div className={styles.iconSection}>
              <FontAwesomeIcon
                className={styles.calendarIcon}
                icon={faCalendar}
              ></FontAwesomeIcon>
              <p>{props.date}</p>
            </div>
            <div className={styles.iconSection}>
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              <p>{props.comments}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={props.selected ? ' ' + styles.blogActiveTitle : styles.blogTitle}>
        {props.title}
      </div>
      <div className={styles.blogParagraph}>{props.description}</div>
      <div className={styles.buttonMainBlog}>
        <Button
          className={props.selected ? ' ' + styles.buttonActive : styles.button}
          variant='medium'
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  selected: PropTypes.string,
};

export default BlogPost;
