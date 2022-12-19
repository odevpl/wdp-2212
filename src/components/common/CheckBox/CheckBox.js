import React from 'react';
import PropTypes from 'prop-types';

export const CheckBox = ({ id, text, isChecked, action }) => {
  return (
    <div key={id}>
      <input type='checkbox' id={id} checked={isChecked} onChange={action} />
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: text }}></label>
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  action: PropTypes.func,
};
