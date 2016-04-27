import React, { PropTypes } from 'react';
import Article from './Article';
import Spinner from './Spinner';
import { guid } from '../../../libs/utils/guid';

export const Content = ({ articles, fetching }) => {

  return (
    <div className='container'>
      {fetching.articles && <div className='spinner-location overlay'><Spinner /></div>}
      {articles.map((a, number) => {
        return <Article key={guid()} number={number + 1} article={a} />;
      })}
    </div>
  );
};

Content.propTypes = {
  articles: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired
};

export default Content;
