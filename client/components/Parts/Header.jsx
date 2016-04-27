import React from 'react';
import SelectSection from './SelectSection';

export const Header = ({ sections, fetching, handleChange, selectedSection }) => {
  return (
    <div className='header'>
      <div className='select-section'>
        <div className='hamburger'></div>
        <SelectSection selectedSection={selectedSection} handleChange={handleChange} sections={sections} fetching={fetching} />
      </div>
      <a href='https://www.postimees.ee/' target='_blank'><div className='logo'></div></a>
      <a href='https://github.com/toomastahves/news-feed' target='_blank'><div className='share'></div></a>
    </div>
  );
};

export default Header;
