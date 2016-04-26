import * as actions from '../constants/api';

export const getArticlesRequest = (section) => {
  return {
    type: actions.GET_ARTICLES_REQUEST,
    section
  };
};
export const getArticlesSuccess = (articles) => {
  return {
    type: actions.GET_ARTICLES_SUCCESS,
    articles
  };
};
export const getArticlesFailed = (error) => {
  return {
    type: actions.GET_ARTICLES_FAILED,
    error
  };
};

export const getArticleRequest = (id) => {
  return {
    type: actions.GET_ARTICLE_REQUEST,
    id
  };
};
export const getArticleSuccess = (article) => {
  return {
    type: actions.GET_ARTICLE_SUCCESS,
    article
  };
};
export const getArticleFailed = (error) => {
  return {
    type: actions.GET_ARTICLE_FAILED,
    error
  };
};
