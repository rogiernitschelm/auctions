import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Application, Navigation, NotFound } from './namespaces/application';
import { GuestContainer } from './namespaces/guest';
import { AdminContainer } from './namespaces/admin';

const history = createBrowserHistory();

export default () => (
  <Router basename="/" history={history}>
    <Application>
      <Navigation />
      <Switch>
        <Route component={AdminContainer} path="/admin" />
        <Route component={GuestContainer} exact path="/create_account" />
        <Route component={GuestContainer} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Application>
  </Router>
);
