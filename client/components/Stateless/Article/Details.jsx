import React, { PropTypes } from 'react';
import { guid } from '../../../../libs/utils/guid';

export const Details = ({ article }) => {

  if(Object.keys(article).length === 0)
    return <div></div>;

  const image = article.landscapeImg ? { backgroundImage: `url('${article.landscapeImg}')` } : {};

  return (
    <div className='article-details-wrapper'>
      <div className='article-details-header' style={image}></div>
      <div className='article-details-body'>
        <div>{article.headline}</div>
        <div>{article.articleLead}</div>
        <div>
          {article.articleBody.map(b => {
            return <div key={guid()}>{b.html}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  article: PropTypes.object.isRequired
};

export default Details;
