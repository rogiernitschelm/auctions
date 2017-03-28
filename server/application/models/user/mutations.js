import { signup, logout, deleteUser, updateUser, login } from './user_mutations';

export default {
  ...login,
  ...signup,
  ...logout,
  ...deleteUser,
  ...updateUser,
};
