import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest, getSectionsRequest } from '../../actions/api';
import Drawer from '../Parts/Drawer';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';

export const HomePage = ({ articles, sections, fetching, dispatch }) => {
  const handleChange = (e) => {
    dispatch(getArticlesRequest(e.target.value));
  };
  return (
    <div>
      <Header handleChange={handleChange} sections={sections} fetching={fetching} />
      <Content sections={sections} articles={articles} fetching={fetching} />
    </div>
  );
};

HomePage.propTypes = {
  articles: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    articles: state.apiReducer.articles,
    sections: state.apiReducer.sections,
    fetching: state.apiReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getArticlesRequest(123));
  dispatch(getSectionsRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
