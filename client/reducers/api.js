import * as constants from '../constants/api';

const initialState = {
  fetchingArticles: false,
  fetchingSections: false,
  articles: [],
  sections: [],
  error: '',
  article: {},
  offset: 0,
  limit: 1,
  section: 81,
  clear: false
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {

    case constants.CHANGE_LIMIT:
      return Object.assign({}, state, { limit: action.limit });
    case constants.CHANGE_SECTION:
      return Object.assign({}, state, { section: action.section });

    case constants.GET_ARTICLES_REQUEST:
      return Object.assign({}, state, { fetchingArticles: true, clear: action.clear, offset: action.offset, limit: action.limit });
    case constants.GET_ARTICLES_SUCCESS:
      if(state.clear)
        return Object.assign({}, state, { fetchingArticles: false, offset: state.limit, articles: action.articles });

      return Object.assign({}, state, { fetchingArticles: false, offset: state.offset + state.limit, articles: [...state.articles, ...action.articles] });

    case constants.GET_ARTICLES_FAILED:
      return Object.assign({}, state, { error: action.error });

    case constants.GET_ARTICLE_REQUEST:
      return Object.assign({}, state, { fetchingArticle: true });
    case constants.GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, { fetchingArticle: false, article: action.article });
    case constants.GET_ARTICLE_FAILED:
      return Object.assign({}, state, { fetchingArticle: false, error: action.error });

    case constants.GET_SECTIONS_REQUEST:
      return Object.assign({}, state, { fetchingSections: true });
    case constants.GET_SECTIONS_SUCCESS:
      return Object.assign({}, state, { fetchingSections: false, sections: action.sections });
    case constants.GET_SECTIONS_FAILED:
      return Object.assign({}, state, { fetchingSections: false, error: action.error });

    default:
      return state;
  }
};
