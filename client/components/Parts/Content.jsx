import React, { PropTypes } from 'react';
import Article from './Article';
import Spinner from './Spinner';

export const Content = ({ articles, fetching }) => {
  if(fetching.articles) return <div className='spinner-location overlay'><Spinner /></div>;

  return (
    <div className='container'>
      {articles.map((a, number) => {
        return <Article key={a.id} number={number + 1} article={a} />;
      })}
    </div>
  );
};

Content.propTypes = {
  articles: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired
};

export default Content;
