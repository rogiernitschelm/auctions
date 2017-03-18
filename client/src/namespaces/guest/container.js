import React, { Component } from 'react';
import CreateAccount from './children/create_account';

class GuestContainer extends Component {
  render() {
    if (this.props.location.pathname === '/guest/create_account') {
      return <CreateAccount />;
    }
    return <div />;
  }
}

export default GuestContainer;
