import React, { PropTypes } from 'react';

export const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
