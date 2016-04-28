import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from '../components/App';
import ArticlesPage from '../components/Containers/ArticlesPage';
import ArticlePage from '../components/Containers/ArticlePage';
import FrontPage from '../components/Containers/FrontPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={FrontPage} />
        <Route path='front' component={FrontPage} />
        <Route path='articles' component={ArticlesPage} />
        <Route path='article/:id' component={ArticlePage} />
      </Route>
    </Router>
  );
};

export default Routes;
