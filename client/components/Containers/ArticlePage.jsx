import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import Details from '../Stateless/Article/Details';
import { connect } from 'react-redux';
import { getArticleRequest } from '../../actions/api';

export const ArticlePage = ({ article }) => {
  return <Details article={article} />;
};

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    article: state.apiReducer.article,
    fetching: state.apiReducer.fetchingArticle
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getArticleRequest(ownProps.routeParams.id));
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ArticlePage));
