import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest } from '../../actions/api';
import List from '../Stateless/Article/List';
import ContentLayout from '../Layouts/Content';

export const ArticlesPage = ({ articles, fetching, dispatch }) => {
  if(articles.length === 0)
    dispatch(getArticlesRequest({ section: 81, offset: 0, limit: 3, clear: true }));

  return <List articles={articles} fetching={fetching} />;
};

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    articles: state.apiReducer.articles,
    fetching: state.apiReducer.fetchingArticles
  };
};

export default connect(mapStateToProps)(ContentLayout(ArticlesPage));
