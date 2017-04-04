import React from 'react';
import { Route } from 'react-router-dom';

import Container from './container';
import SignupForm from './children/signup_form';
import LoginForm from './children/login_form';

export default () => (
  <Container path="/">
    <Route path="/create_account" component={SignupForm} />
    <Route exact path="/" component={LoginForm} />
  </Container>
);
