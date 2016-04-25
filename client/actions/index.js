import * as actions from '../constants/';

export const getHomeContentRequest = () => {
  return {
    type: actions.GET_HOME_CONTENT_REQUEST
  };
};

export const getHomeSuccess = (content) => {
  return {
    type: actions.GET_HOME_CONTENT_SUCCESS,
    content
  };
};

export const getHomeFailed = (error) => {
  return {
    type: actions.GET_HOME_CONTENT_FAILED,
    error
  };
};
