import React, { Component } from 'react';
import { RequireNoSession } from '../authentication';
import CreateAccount from './children/create_account';

@RequireNoSession
export default class GuestContainer extends Component {
  render() {
    if (this.props.location.pathname === '/guest/create_account') {
      return <CreateAccount />;
    }
    return <div />;
  }
}
