import React, { PropTypes } from 'react';
import Article from './Article';

export const Content = ({ articles }) => {
  return (
    <div className='container'>
      {articles.map(a => <Article key={a.id} article={a} />)}
    </div>
  );
};

export default Content;
