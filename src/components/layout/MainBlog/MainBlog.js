import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/blogPostsRedux';
import BlogPost from '../../features/BlogPost/BlogPost';
import styles from '../../layout/MainBlog/MainBlog.module.scss';

const MainBlog = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div className={styles.root}>
      {posts.map(post => (
        <BlogPost {...post} key={post.id} />
      ))}
    </div>
  );
};

export default MainBlog;
