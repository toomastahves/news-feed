import React from 'react';
import icon from './github.svg';

export const Icon = () => {
  return (
    <a href='https://github.com/toomastahves/news-feed' target='_blank'>
      <img style={{ width: '14px' }} src={icon} alt='Github icon' />
    </a>
  );
};

export default Icon;
