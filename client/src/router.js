import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Application } from './namespaces/application';
import { GuestContainer } from './namespaces/guest';
import { AdminContainer } from './namespaces/admin';

const history = createBrowserHistory();

export default () => (
  <BrowserRouter basename="/" history={history}>
    <Application>
      <Switch>
        <GuestContainer />
        <AdminContainer path="/admin" />
      </Switch>
    </Application>
  </BrowserRouter>
);
