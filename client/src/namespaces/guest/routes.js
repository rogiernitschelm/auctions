import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './container';
import SignupForm from './children/signup_form';
import LoginForm from './children/login_form';

export default () => (
  <Route path="/guest">
    <Switch>
      <Container path="/guest">
        <Route path="/guest/create_account" component={SignupForm} />
        <Route path="/guest/login" component={LoginForm} />
      </Container>
    </Switch>
  </Route>
);
