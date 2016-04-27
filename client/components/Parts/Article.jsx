import React, { PropTypes } from 'react';

export const Article = ({ article, number }) => {

  const image = { backgroundImage: `url('${article.img}')` };
  const type = number % 2 === 1 ? 'type1' : number % 4 !== 0 ? 'type2' : 'type3';

  return (
    <div className={`article article-layout-${type}`}>
      <div className={`article-part1 article-part1-layout-${type}`} style={image}>
        <div className='article-title'>{article.headline}</div>
      </div>
      <div className={`article-part2 article-part2-layout-${type}`} style={image}></div>
      <div className={`article-part3 article-part3-layout-${type}`}>
        <div className='article-description'>{article.articleLead.replace(/<(?:.|\n)*?>/gm, '')}</div>
      </div>
      <div className={`article-part4 article-part4-layout-${type}`}>
        <div className='circle'><div className='circle-number'>{number}</div></div>
      </div>
    </div>
  );

};

Article.propTypes = {
  article: PropTypes.object,
  number: PropTypes.number
};

export default Article;
