import React from 'react';
import { Navigation } from './';

export default ({ children }) => (
  <main>
    <Navigation />
      {children}
    {/* <Footer /> */}
  </main>
);
