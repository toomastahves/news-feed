import * as actions from '../constants/api';

/*
* Get articles list request actions
*/
export const getArticlesRequest = (section, offset, limit, clear) => {
  return {
    type: actions.GET_ARTICLES_REQUEST,
    section,
    offset,
    limit,
    clear
  };
};
export const getArticlesSuccess = (articles) => {

  const mappedArticles = [];

  for(const a of articles) {
    let mappedArticle = {};

    if(a.thumbnail) {
      mappedArticle = {
        id: a.id,
        headline: a.headline,
        articleLead: a.articleLead[0].html,
        landscapeImg: a.thumbnail.sources.landscape.large,
        portraitImg: a.thumbnail.sources.portrait.large
      };
    } else {
      mappedArticle = {
        id: a.id,
        headline: a.headline,
        articleLead: a.articleLead[0].html
      };
    }

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

/*
* Get article by id request actions
*/
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

/*
* Get sections list request actions
*/
export const getSectionsRequest = () => {
  return {
    type: actions.GET_SECTIONS_REQUEST
  };
};
export const getSectionsSuccess = (sections) => {
  const mappedSections = [];
  for(const s of sections) {
    const mappedSection = {
      id: s.id,
      name: s.name
    };
    mappedSections.push(mappedSection);
  }
  return {
    type: actions.GET_SECTIONS_SUCCESS,
    sections: mappedSections
  };
};
export const getSectionsFailed = (error) => {
  return {
    type: actions.GET_SECTIONS_FAILED,
    error
  };
};
