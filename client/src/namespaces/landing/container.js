import React, { Component } from 'react';
import { RequireNoSession } from '../authentication';
import LandingComponent from './component';

@RequireNoSession
export default class LandingContainer extends Component {
  render() {
    return <LandingComponent />;
  }
}
