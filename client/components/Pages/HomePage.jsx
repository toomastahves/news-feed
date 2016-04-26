import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest } from '../../actions/api';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';

export const HomePage = ({ articles }) => {
  return (
    <div>
      <Content articles={articles} />
    </div>
  );
};

HomePage.propTypes = {
  articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    articles: state.apiReducer.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getArticlesRequest(123));
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
