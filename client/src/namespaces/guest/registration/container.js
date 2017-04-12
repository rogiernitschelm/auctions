import React, { Component } from 'react';
import { RequireNoSession } from '../../authentication';
import RegistrationComponent from './component';

@RequireNoSession
export default class RegistrationContainer extends Component {
  render() {
    return <RegistrationComponent />;
  }
}
