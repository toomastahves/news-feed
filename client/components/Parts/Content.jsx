import React, { PropTypes } from 'react';
import Article from './Article';

export const Content = ({ articles }) => {
  return (
    <div className='container'>
      {articles.map((a, number) => {
        return <Article key={a.id} number={number + 1} article={a} />;
      })}
    </div>
  );
};

Content.propTypes = {
  articles: PropTypes.array
};

export default Content;
