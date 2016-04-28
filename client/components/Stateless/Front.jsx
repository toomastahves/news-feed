import React from 'react';
import Arrow from './Parts/Arrow';

export const Front = () => {
  return (
    <div className='heading'>
      <div className='heading-title'>{'News feed from Postimees API'}</div>
      <div className='heading-arrow'><a href='#/articles'><Arrow /></a></div>
    </div>
  );
};

export default Front;
