import React, { PropTypes } from 'react';

export const Front = ({ data }) => {
  const style = {
    backgroundImage: `url('${data.url}')`
  };
  return (
    <div className='heading' style={style}>
      <div className='heading-title'>{'Heading in the middle'}</div>
    </div>
  );
};

Front.propTypes = {

};

export default Front;
