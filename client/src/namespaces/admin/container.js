import React, { Component } from 'react';

import { RequireAdmin } from '../authentication';
import AdminComponent from './component';

@RequireAdmin
export default class GuestContainer extends Component {
  render() {
    return <AdminComponent {...this.props} />;
  }
}
