import React, { Component } from 'react';
import AccountComponent from './component';
import { RequireSession } from 'authentication';

@RequireSession
class AccountContainer extends Component {
  render() {
    return (
      <AccountComponent
        {...this.props}
      />
    );
  }
}

export default AccountContainer;
