import { default as signup } from './signup';
import { default as logout } from './logout';
import { default as login } from './login';
import { default as remove } from './remove';
import { default as update } from './update';

export default {
  ...signup,
  ...logout,
  ...login,
  ...remove,
  ...update
};
