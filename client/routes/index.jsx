import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from '../components/App';
import ArticlesPage from '../components/Containers/ArticlesPage';
import LandingPage from '../components/Containers/LandingPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={LandingPage} />
        <Route path='landing' component={LandingPage} />
        <Route path='articles' component={ArticlesPage} />
      </Route>
    </Router>
  );
};

export default Routes;
