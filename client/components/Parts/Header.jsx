import React, { PropTypes } from 'react';
import SelectSection from './SelectSection';
import SelectLimit from './SelectLimit';

export const Header = ({
  sections, fetching, handleSectionChange, selectedSection, toggleDrawer, selectedLimit, handleLimitChange
}) => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div onClick={toggleDrawer} className='hamburger'></div>
        <div className='select-section'>
          <SelectSection selectedSection={selectedSection} handleSectionChange={handleSectionChange} sections={sections} fetching={fetching} />
        </div>
      </div>
      <a href='https://www.postimees.ee/' target='_blank'><div className='logo'></div></a>
      <div className='share-icons'>
        <a href='https://www.facebook.com/postimees' target='_blank'><div className='facebook'></div></a>
        <a href='https://twitter.com/postimees' target='_blank'><div className='twitter'></div></a>
        <div className='share'></div>
      </div>
    </div>
  );
};

Header.propTypes = {
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired,
  handleSectionChange: PropTypes.func.isRequired,
  selectedSection: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  selectedLimit: PropTypes.string.isRequired,
  handleLimitChange: PropTypes.func.isRequired
};

export default Header;
