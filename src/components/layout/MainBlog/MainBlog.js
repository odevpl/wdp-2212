import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/blogPostsRedux';
import BlogPost from '../../features/BlogPost/BlogPost';
import styles from '../../layout/MainBlog/MainBlog.module.scss';
import Container from '../../common/Container/Container';

const MainBlog = () => {
  const posts = useSelector(getAllPosts);
  const [activePage, setActivePage] = useState(0);

  const handleActivePage = page => setActivePage(page);

  const dots = [];

  for (let i = 0; i < 3; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handleActivePage(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <Container>
      <div className={styles.panelBar}>
        <div className='row no-gutters align-items-end'>
          <div className={'col-auto ' + styles.heading}>
            <h3>Latest Blog</h3>
          </div>
          <div className={'col '}></div>
          <div className={'col-auto ' + styles.dots}>{<ul>{dots}</ul>}</div>
        </div>
      </div>
      <div className={styles.root}>
        {posts.slice(activePage * 3, (activePage + 1) * 3).map((
          post // 3 comp. per page before map.
        ) => (
          <BlogPost {...post} key={post.id} />
        ))}
      </div>
    </Container>
  );
};

export default MainBlog;
