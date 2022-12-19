import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { setSize } from '../../../redux/displaysizeRedux';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CompareBar } from '../../layout/CompareBar/CompareBar';

const MainLayout = ({ children }) => {
  const [viewportSize, setViewportSize] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const sizing = () => {
    if (visualViewport.width > 821) {
      setViewportSize('desktop');
      setAmount(8);
    }
    if (visualViewport.width > 415 && window.innerWidth < 821) {
      setViewportSize('tablet');
      setAmount(3);
    }
    if (visualViewport.width < 415) {
      setViewportSize('mobile');
      setAmount(2);
    }
  };

  useEffect(() => {
    sizing();
    dispatch(setSize({ viewportSize, amount }));
  });

  visualViewport.onresize = () => {
    sizing();
  };

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
