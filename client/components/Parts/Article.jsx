import React, { PropTypes } from 'react';

export const Article = ({ article, number }) => {

  const image1 = article.landscapeImg ? { backgroundImage: `url('${article.landscapeImg}')` } : {};
  const image2 = article.portraitImg ? { backgroundImage: `url('${article.portraitImg}')` } : {};
  const type = number % 2 === 1 ? 'type1' : number % 4 !== 0 ? 'type2' : 'type3';

  const visibility = type === 'type3' ? { display: 'block' } : { display: 'none' };

  return (
    <div className={`article article-mobile article-${type}`}>
      <div className={`article-part1 article-part1-mobile article-part1-${type}`} style={image1}>
        <div className='article-title'>{article.headline}</div>
        <div className='article-description' style={visibility}>{article.articleLead.replace(/<(?:.|\n)*?>/gm, '')}</div>
      </div>
      <div className={`article-part2 article-part2-mobile article-part2-${type}`} style={image2}></div>
      <div className={`article-part3 article-part3-mobile article-part3-${type}`}>
        <div className='article-description'>{article.articleLead.replace(/<(?:.|\n)*?>/gm, '')}</div>
      </div>
      <div className={`article-part4 article-part4-mobile article-part4-${type}`}>
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
