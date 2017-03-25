import { signup, logout, deleteUser } from './user_mutations';

export default {
  ...signup,
  ...logout,
  ...deleteUser,
};
