import * as constants from '../constants/api';

const initialState = {
  fetching: false,
  articles: {},
  error: {},
  article: {}
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {

    case constants.GET_ARTICLES_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case constants.GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, { fetching: false, articles: action.articles });
    case constants.GET_ARTICLES_FAILED:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case constants.GET_ARTICLE_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case constants.GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, { fetching: false, article: action.article });
    case constants.GET_ARTICLE_FAILED:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};
