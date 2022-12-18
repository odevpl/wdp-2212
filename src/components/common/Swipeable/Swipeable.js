import React from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const handlers = useSwipeable({
    preventDefaultTouchMoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
  });
  return <div {...handlers}>{children}</div>;
};
export default Swipeable;

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};
