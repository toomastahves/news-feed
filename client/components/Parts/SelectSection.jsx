import React, { PropTypes } from 'react';
import Spinner from './Spinner';
import { guid } from '../../../libs/utils/guid';

export const SelectSection = ({ sections, fetching, handleSectionChange, selectedSection }) => {
  if(fetching.sections) return <Spinner />;

  const options = [];
  options.push(<option key={guid()} value='0'>{'Select section'}</option>);

  for(let i = 0; i < sections.length; i++) {
    const option = <option key={guid()} value={sections[i].id}>{sections[i].name}</option>;
    if(sections[i].name) options.push(option);
  }

  return (
    <div>
      <select value={selectedSection} onChange={handleSectionChange}>
        {options}
      </select>
    </div>
  );
};

SelectSection.propTypes = {
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired,
  handleSectionChange: PropTypes.func.isRequired,
  selectedSection: PropTypes.string.isRequired
};

export default SelectSection;
