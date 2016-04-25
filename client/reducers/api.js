import * as constants from '../constants/';

const initialState = {
  fetching: false,
  content: {}
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_HOME_CONTENT_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case constants.GET_HOME_CONTENT_SUCCESS:
      return Object.assign({}, state, { content: action.content, fetching: false });
    default:
      return state;
  }
};
