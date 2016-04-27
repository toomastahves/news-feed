import React, { PropTypes } from 'react';

export const SelectLimit = ({ selectedLimit, handleLimitChange }) => {
  return (
    <select value={selectedLimit} onChange={handleLimitChange}>
      <option value='1'>{'Limit: 1'}</option>
      <option value='3'>{'Limit: 3'}</option>
      <option value='5'>{'Limit: 5'}</option>
    </select>
  );
};

SelectLimit.propTypes = {
  selectedLimit: PropTypes.string.isRequired,
  handleLimitChange: PropTypes.func.isRequired
};

export default SelectLimit;
