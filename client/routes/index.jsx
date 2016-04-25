import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import HomePage from '../components/Pages/HomePage';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={HomePage} />
        <Route path='home' component={HomePage} />
      </Route>
    </Router>
  );
};

export default Routes;
