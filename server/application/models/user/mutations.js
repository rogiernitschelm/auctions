import { signup, logout, deleteUser, updateUser, login, changePassword } from './user_mutations';

export default {
  ...login,
  ...signup,
  ...logout,
  ...deleteUser,
  ...updateUser,
  ...changePassword
};
