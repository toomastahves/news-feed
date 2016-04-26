import React, { PropTypes } from 'react';

export const Article = ({ article, number }) => {
  const style = {
    backgroundImage: `url('${article.img}')`
  };
  return (
    <div className='article'>
      <div className='article-title' style={style}>
        <div className='article-title-style'>{article.headline}</div>
      </div>
      <div className='article-description'>
        <div className='article-text'>
          <div className='article-text-style'>{article.articleLead.replace(/<(?:.|\n)*?>/gm, '')}</div>
        </div>
        <div className='article-circle'>
          <div className='circle'><div className='circle-number'>{number}</div></div>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  number: PropTypes.number
};

export default Article;
