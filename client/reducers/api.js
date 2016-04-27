import * as constants from '../constants/api';

const initialState = {
  fetching: {
    sections: false,
    articles: false,
    article: false
  },
  articles: [],
  error: {},
  article: {},
  sections: [],
  articleOffset: 0
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {

    case constants.GET_ARTICLES_REQUEST:
      return Object.assign({}, state, { fetching: { articles: true } });
    case constants.GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, { fetching: { articles: false }, articleOffset: state.articleOffset + 1, articles: [...state.articles, ...action.articles] });
    case constants.GET_ARTICLES_FAILED:
      return Object.assign({}, state, { fetching: { articles: false }, error: action.error });

    case constants.GET_ARTICLE_REQUEST:
      return Object.assign({}, state, { fetching: { article: true } });
    case constants.GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, { fetching: { article: false }, article: action.article });
    case constants.GET_ARTICLE_FAILED:
      return Object.assign({}, state, { fetching: { article: false }, error: action.error });

    case constants.GET_SECTIONS_REQUEST:
      return Object.assign({}, state, { fetching: { sections: true } });
    case constants.GET_SECTIONS_SUCCESS:
      return Object.assign({}, state, { fetching: { sections: false }, sections: action.sections });
    case constants.GET_SECTIONS_FAILED:
      return Object.assign({}, state, { fetching: { sections: false }, error: action.error });

    default:
      return state;
  }
};
