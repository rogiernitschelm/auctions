import { signup, logout, deleteUser, updateUser } from './user_mutations';

export default {
  ...signup,
  ...logout,
  ...deleteUser,
  ...updateUser,
};
