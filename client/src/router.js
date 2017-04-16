import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Application, Navigation, NotFound } from './namespaces/application';

import LandingContainer from './namespaces/guest/landing/container';
import RegistrationContainer from './namespaces/guest/registration/container';
import LoginContainer from './namespaces/guest/login/container';
import AdminContainer from './namespaces/admin/container';
import AccountContainer from './namespaces/account/container';

const history = createBrowserHistory();

export default () => (
  <Router basename="/" history={history}>
    <Application>
      <Navigation />
      <Switch>
        <Route component={LandingContainer} exact path="/" />
        <Route component={RegistrationContainer} exact path="/registration" />
        <Route component={LoginContainer} exact path="/login" />

        <Route path="/seller" />
        <Route path="/buyer" />
        <Route component={AdminContainer} path="/admin" />

        <Route path="/account" component={AccountContainer} />

        <Route component={NotFound} />
      </Switch>
    </Application>
  </Router>
);
