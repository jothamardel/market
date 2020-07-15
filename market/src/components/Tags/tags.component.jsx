import React from 'react';

import './tags.styles.css';

const Tags = ({ filteredTags }) => (
  <div className='tag-container'>
    {
      !filteredTags.length ? 
      <p>not found</p> : null
    }
    {
      filteredTags.map((item, index) => (
        <span key={index}>{ item }</span>
      ))
    }
  </div>
);

export default Tags;
