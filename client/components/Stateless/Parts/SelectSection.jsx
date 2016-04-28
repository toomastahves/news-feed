import React, { PropTypes } from 'react';
import Spinner from './Spinner';
import { guid } from '../../../../libs/utils/guid';

export const SelectSection = ({ sections, fetching, handleSectionChange, section }) => {
  if(fetching) return <div><Spinner /></div>;

  const options = [];
  options.push(<option key={guid()} value={0}>{'Select section'}</option>);

  for(let i = 0; i < sections.length; i++) {
    const option = <option key={guid()} value={sections[i].id}>{sections[i].name}</option>;
    if(sections[i].name) options.push(option);
  }

  return (
    <select value={section} onChange={handleSectionChange}>
      {options}
    </select>
  );
};

SelectSection.propTypes = {
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  handleSectionChange: PropTypes.func.isRequired,
  section: PropTypes.number.isRequired
};

export default SelectSection;
