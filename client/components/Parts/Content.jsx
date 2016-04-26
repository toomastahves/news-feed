import React, { PropTypes } from 'react';
import Article from './Article';

export const Content = ({ articles }) => {
  return (
    <div className='container'>
      <Article article={articles[0]} />
      <Article article={articles[1]} />
      <Article article={articles[2]} />
    </div>
  );
};

export default Content;
