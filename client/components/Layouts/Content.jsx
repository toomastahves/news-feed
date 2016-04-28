import React from 'react';
import HeaderContainer from '../Containers/HeaderContainer';
import Footer from '../Stateless/Footer';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div>
        <HeaderContainer />
        <div className='container'>
          <SubComponent {...props} />
        </div>
        <Footer />
      </div>
    );
  };

  return Sub;
};

export default ContentLayout;
