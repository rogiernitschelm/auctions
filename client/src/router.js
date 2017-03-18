import React from 'react';
import { BrowserRouter, IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { Application } from './namespaces/application';

import AccountRoute from './namespaces/account/routes';
import { GuestRoutes } from './namespaces/guest';

const history = createBrowserHistory();
export const middleware = routerMiddleware(history);

export default () => (
  <BrowserRouter basename="/" history={history}>
    <Application>
      <AccountRoute />
      <GuestRoutes />
    </Application>
  </BrowserRouter>
);
