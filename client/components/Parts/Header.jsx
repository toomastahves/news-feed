import React from 'react';

export const Header = () => {
  return (
    <div className='header'>
      <div className='hamburger'></div>
      <a href='https://www.postimees.ee/' target='_blank'><div className='logo'></div></a>
      <a href='https://github.com/toomastahves/news-feed' target='_blank'><div className='share'></div></a>
    </div>
  );
};

export default Header;
