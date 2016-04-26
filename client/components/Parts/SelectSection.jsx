import React, { PropTypes } from 'react';
import Spinner from './Spinner';
import { guid } from '../../../libs/utils/guid';

export const SelectSection = ({ sections, fetching, handleChange }) => {
  if(fetching.sections) return <Spinner />;

  const options = [];
  for(let i = 0; i < sections.length; i++) {
    const option = <option key={guid()} value={sections[i].id}>{sections[i].name}</option>;
    if(sections[i].name) options.push(option);
  }
  return (
    <div>
      <select onChange={handleChange}>
        {options}
      </select>
    </div>
  );
};

SelectSection.propTypes = {

};

export default SelectSection;
