import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Application, Navigation, NotFound } from './namespaces/application';

import LandingContainer from './namespaces/landing/container';
import RegistrationContainer from './namespaces/registration/container';
import LoginContainer from './namespaces/login/container';
import AdminContainer from './namespaces/admin/container';

const history = createBrowserHistory();

export default () => (
  <Router basename="/" history={history}>
    <Application>
      <Navigation />
      <Switch>
        <Route component={LandingContainer} exact path="/" />
        <Route component={RegistrationContainer} exact path="/registration" />
        <Route component={LoginContainer} exact path="/login" />

        <Route component={AdminContainer} path="/admin" />

        <Route component={NotFound} />
      </Switch>
    </Application>
  </Router>
);
