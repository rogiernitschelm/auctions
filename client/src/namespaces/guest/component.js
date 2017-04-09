import React from 'react';
import { ContainerFluid, Main } from 'common';
import { Route } from 'react-router-dom';

import CommercialInfo from './children/commercial_info';
import LoginComponent from './login_component';
import SignupComponent from './signup_component';

export default () => (
  <ContainerFluid>

    <Main className="guest-container">
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/create_account" component={SignupComponent} />
    </Main>

    <Route exact path="/" component={CommercialInfo} />
    <Route exact path="/create_account" component={CommercialInfo} />

  </ContainerFluid>
);
