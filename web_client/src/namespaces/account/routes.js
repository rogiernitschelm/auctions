import React from 'react';
import { Route } from 'react-router-dom';

import AccountContainer from './container';

export default () => (
  <Route path="/account" component={AccountContainer} />
);
