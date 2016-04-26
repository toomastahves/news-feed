import React, { PropTypes } from 'react';

export const Article = ({ article }) => {
  const style = {
    backgroundImage: `url('${article.url}')`
  };
  return (
    <div className='article'>
      <div className='article-title' style={style}>{'Title here'}</div>
      <div className='article-description'>
        <div className='article-text'>{'Long description here Long description here'}</div>
        <div className='article-bubble'>{'bubble'}</div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object
};

export default Article;
