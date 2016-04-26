import React from 'react';
import SelectSection from './SelectSection';

const handleDrawer = () => {
  document.getElementById('drawer').classList.toggle('drawer-open');
};

export const Header = ({ sections, fetching, handleChange }) => {
  return (
    <div className='header'>
      <div className='select-section'>
        <div onClick={handleDrawer} className='hamburger'></div>
        <SelectSection handleChange={handleChange} sections={sections} fetching={fetching} />
      </div>
      <a href='https://www.postimees.ee/' target='_blank'><div className='logo'></div></a>
      <a href='https://github.com/toomastahves/news-feed' target='_blank'><div className='share'></div></a>
    </div>
  );
};

export default Header;
