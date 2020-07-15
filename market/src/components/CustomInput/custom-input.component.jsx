import React from 'react';

import './custom-input.styles.css';

const CustomInput = ({ ...otherProps }) => (
  <input {...otherProps} />
);

export default CustomInput;