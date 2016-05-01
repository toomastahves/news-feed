import React, { PropTypes } from 'react';
import SelectSection from './Parts/SelectSection';

export const Header = ({
  sections, fetching, handleSectionChange, section, toggleDrawer
}) => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div onClick={toggleDrawer} className='hamburger'></div>
        <div className='select-section'>
          <SelectSection section={section} handleSectionChange={handleSectionChange} sections={sections} fetching={fetching} />
        </div>
      </div>
      <a href='#/landing'><div className='logo'></div></a>
      <div className='header-right'>
        <a href='https://www.facebook.com/postimees' target='_blank'><div className='facebook'></div></a>
        <a href='https://twitter.com/postimees' target='_blank'><div className='twitter'></div></a>
        <div className='share'></div>
      </div>
    </div>
  );
};

Header.propTypes = {
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  handleSectionChange: PropTypes.func.isRequired,
  section: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired
};

export default Header;
