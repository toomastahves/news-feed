import React, { PropTypes } from 'react';
import { guid } from '../../../libs/utils/guid';

export const Drawer = ({ sections, handleSectionChange }) => {
  const handleMouseOver = () => {
    document.body.style.overflow = 'hidden';
  };

  return (
    <div onMouseOver={handleMouseOver} id='drawer' className='drawer'>
      {sections.map(s => <div onClick={handleSectionChange} value={s.id} className='section-item' key={guid()}>{s.name}</div>)}
    </div>
  );
};

Drawer.propTypes = {
  sections: PropTypes.array.isRequired,
  handleSectionChange: PropTypes.func.isRequired
};

export default Drawer;
