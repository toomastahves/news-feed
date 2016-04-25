import React, { PropTypes } from 'react';
import Article2 from './Article2';

export const Content = ({ articles }) => {
  return (
    <div className='container'>
      <Article2 article={articles[0]} />
      <Article2 article={articles[1]} />
      <Article2 article={articles[2]} />
    </div>
  );
};

export default Content;
