import React from 'react';
import Arrow from './Parts/Arrow';

export const Front = () => {
  return (
    <div className='landing'>
      <div className='landing-title'>{'News feed from Postimees API'}</div>
      <div className='landing-arrow'><a href='#/articles'><Arrow /></a></div>
    </div>
  );
};

export default Front;
