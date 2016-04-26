import * as actions from '../constants/api';

export const getArticlesRequest = (section) => {
  return {
    type: actions.GET_ARTICLES_REQUEST,
    section
  };
};
export const getArticlesSuccess = (articles) => {
  console.log(articles);
  const mappedArticles = [];
  for(const a of articles) {
    const mappedArticle = {
      id: a.id,
      headline: a.headline,
      articleLead: a.articleLead[0].html,
      img: a.thumbnail.sources.portrait.large
    };
    mappedArticles.push(mappedArticle);
  }
  return {
    type: actions.GET_ARTICLES_SUCCESS,
    articles: mappedArticles
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
