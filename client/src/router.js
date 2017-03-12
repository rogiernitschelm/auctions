import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Application } from './namespaces/application';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Application} />
  </BrowserRouter>
);
