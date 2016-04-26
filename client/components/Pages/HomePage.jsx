import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest } from '../../actions/api';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';

export const HomePage = ({ articles, fetching }) => {
  return (
    <div>
      <Header />
      <Content articles={articles} fetching={fetching} />
    </div>
  );
};

HomePage.propTypes = {
  articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    articles: state.apiReducer.articles,
    fetching: state.apiReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getArticlesRequest(123));
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
