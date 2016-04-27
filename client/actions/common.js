import { SELECT_SECTION, CHANGE_LIMIT } from '../constants/common';

export const selectSection = (selectedSection) => {
  return {
    type: SELECT_SECTION,
    selectedSection
  };
};

export const changeLimit = (limit) => {
  return {
    type: CHANGE_LIMIT,
    limit
  };
};
