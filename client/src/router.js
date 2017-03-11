import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { AccountRoutes } from './namespaces/account';

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <AccountRoutes />
      <IndexRoute />
    </Route>
  </Router>
);
