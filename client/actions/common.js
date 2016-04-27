import { SELECT_SECTION } from '../constants/common';

export const selectSection = (selectedSection) => {
  return {
    type: SELECT_SECTION,
    selectedSection
  };
};
