import { signup, logout } from './user_mutations';

export default {
  ...signup,
  ...logout
};
