import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Application } from './namespaces/application';
import { AccountRoutes } from './namespaces/account';
import { GuestRoutes } from './namespaces/guest';

const history = createBrowserHistory();

export default () => (
  <BrowserRouter basename="/" history={history}>
    <Application>
      <AccountRoutes />
      <GuestRoutes />
    </Application>
  </BrowserRouter>
);
