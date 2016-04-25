import React, { PropTypes } from 'react';

export const Article1 = ({ article }) => {
  return (
    <div className='article'>
      <div className='article-title'>{'Title here'}</div>
      <div className='article-description'>
        <div className='article-text'>{'Long description here Long description here'}</div>
        <div className='article-bubble'>{'bubble'}</div>
      </div>
    </div>
  );
};

Article1.propTypes = {
  article: PropTypes.object
};

export default Article1;
