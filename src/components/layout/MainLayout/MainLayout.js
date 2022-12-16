import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { setSize } from '../../../redux/displaysizeRedux';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CompareBar } from '../../layout/CompareBar/CompareBar';

const MainLayout = ({ children }) => {
  const [viewportSize, setViewportSize] = useState('');
  const dispatch = useDispatch();

  visualViewport.onresize = () => {
    if (window.innerWidth > 821) {
      setViewportSize('desktop');
    }
    if (window.innerWidth > 415 && window.innerWidth < 821) {
      setViewportSize('tablet');
    }
    if (window.innerWidth < 415) {
      setViewportSize('mobile');
    }
  };
  dispatch(setSize(viewportSize));

  return (
    <div>
      <Header />
      {children}
      <CompareBar />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
