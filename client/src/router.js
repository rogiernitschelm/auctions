import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Account from './namespaces/account/component';
console.log(Account, "a")
export default (
  <Router history={browserHistory}>
    <Route path="/" component={Account}>

    </Route>
  </Router>
);
