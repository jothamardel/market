import React from 'react';

import './custom-button.styles.css';


const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>
    { children }
  </button>
);

export default CustomButton;