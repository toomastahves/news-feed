import React from 'react';
import HeaderContainer from '../Containers/HeaderContainer';

export const Landing = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div>
        <HeaderContainer />
        <SubComponent {...props} />
      </div>
    );
  };

  return Sub;
};

export default Landing;
