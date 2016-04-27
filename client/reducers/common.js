import * as constants from '../constants/common';

const initialState = {
  selectedSection: '0'
};

export const commonReducer = (state = initialState, action) => {
  switch(action.type) {

    case constants.SELECT_SECTION:
      return Object.assign({}, state, { selectedSection: action.selectedSection });

    default:
      return state;
  }
};
