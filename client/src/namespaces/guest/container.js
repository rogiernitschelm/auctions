import React, { Component } from 'react';
import { RequireNoSession } from '../authentication';
import GuestComponent from './component';

@RequireNoSession
export default class GuestContainer extends Component {
  render() {
    return (
      <GuestComponent {...this.props} />
    );
  }
}
