import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getArticlesRequest, getSectionsRequest, selectSection } from '../../actions/api';
import Drawer from '../Stateless/Drawer';
import Header from '../Stateless/Header';

export const HeaderContainer = ({ sections, fetching, section, dispatch, limit }) => {
  const toggleDrawer = () => {
    document.getElementById('drawer').classList.toggle('drawer-open');
    document.body.style.overflow = 'auto';
  };
  const handleSectionChange = (e) => {
    window.location.replace('#/articles');
    window.scroll(0, 0);

    dispatch(getArticlesRequest({ section: Number(e.target.value), offset: 0, limit, clear: true }));
    dispatch(selectSection(Number(e.target.value)));

    if(e.target.type !== 'select-one')
      toggleDrawer();
  };

  if(sections.length === 0)
    dispatch(getSectionsRequest());

  return (
    <div>
      <Drawer handleSectionChange={handleSectionChange} sections={sections} />
      <Header
        toggleDrawer={toggleDrawer}
        sections={sections}
        fetching={fetching}
        handleSectionChange={handleSectionChange}
        section={section}
        limit={limit}
      />
    </div>
  );
};

HeaderContainer.propTypes = {
  sections: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  section: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sections: state.apiReducer.sections,
    fetching: state.apiReducer.fetchingSections,
    limit: state.apiReducer.limit,
    section: state.apiReducer.section
  };
};

export default connect(mapStateToProps)(HeaderContainer);
