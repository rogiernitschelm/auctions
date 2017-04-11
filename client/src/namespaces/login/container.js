import React, { Component } from 'react';
import { RequireNoSession } from '../authentication';
import LoginComponent from './component';

@RequireNoSession
export default class LoginContainer extends Component {
  render() {
    return <LoginComponent />;
  }
}
