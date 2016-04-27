import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest, getSectionsRequest } from '../../actions/api';
import { selectSection } from '../../actions/common';
import Drawer from '../Parts/Drawer';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';

export const HomePage = ({ articles, sections, fetching, selectedSection, dispatch }) => {

  const handleChange = (e) => {
    dispatch(getArticlesRequest(e.target.value));
    dispatch(selectSection(e.target.value));
  };
  const handleClick = () => {
    dispatch(getArticlesRequest(253));
  };

  return (
    <div>
      <Header sections={sections} fetching={fetching} handleChange={handleChange} selectedSection={selectedSection} />
      {articles.length === 0 && <Front handleClick={handleClick} />}
      <Content sections={sections} articles={articles} fetching={fetching} />
    </div>
  );
};

HomePage.propTypes = {
  articles: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.object.isRequired,
  selectedSection: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    articles: state.apiReducer.articles,
    sections: state.apiReducer.sections,
    fetching: state.apiReducer.fetching,
    selectedSection: state.commonReducer.selectedSection
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getSectionsRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
