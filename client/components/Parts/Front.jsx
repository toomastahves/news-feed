import React, { PropTypes } from 'react';
import Arrow from './Arrow';

export const Front = ({ handleGetArticlesClick }) => {
  return (
    <div className='heading'>
      <div className='heading-title'>{'News feed from Postimees API'}</div>
      <div className='heading-arrow' onClick={handleGetArticlesClick}><Arrow /></div>
    </div>
  );
};

Front.propTypes = {
  handleGetArticlesClick: PropTypes.func.isRequired
};

export default Front;
