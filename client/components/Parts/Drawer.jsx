import React, { PropTypes } from 'react';

export const Drawer = ({ sections }) => {
  return (
    <div id='drawer' className='drawer'>
      {sections.map(s => <div key={s.id}>{s.name}</div>)}
    </div>
  );
};

Drawer.propTypes = {

};

export default Drawer;
