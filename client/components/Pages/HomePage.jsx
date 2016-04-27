import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest, getSectionsRequest } from '../../actions/api';
import { selectSection } from '../../actions/common';
import Drawer from '../Parts/Drawer';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';
import Footer from '../Parts/Footer';

export const HomePage = ({ articles, sections, fetching, selectedSection, dispatch }) => {

  const toggleDrawer = () => {
    document.getElementById('drawer').classList.toggle('drawer-open');
  };
  const handleSectionChange = (e) => {
    dispatch(getArticlesRequest(e.target.value, 0));
    dispatch(selectSection(e.target.value));
  };
  const handleGetArticlesClick = () => {
    dispatch(getArticlesRequest('81', 0));
  };

  const handleGetArticlesFromDrawer = (e) => {
    console.log(e.target.value);
    dispatch(getArticlesRequest(e.target.value, 0));
    dispatch(selectSection(String(e.target.value)));
    toggleDrawer();
  };


  return (
    <div>
      <Drawer handleSectionChange={handleGetArticlesFromDrawer} sections={sections} />
      <Header toggleDrawer={toggleDrawer} sections={sections} fetching={fetching} handleSectionChange={handleSectionChange} selectedSection={selectedSection} />
      {articles.length === 0 && <Front handleGetArticlesClick={handleGetArticlesClick} />}
      <Content sections={sections} articles={articles} fetching={fetching} />
      <Footer />
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
