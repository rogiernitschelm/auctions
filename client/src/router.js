import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Application } from './namespaces/application';

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Application} />
    </BrowserRouter>
  )
}
