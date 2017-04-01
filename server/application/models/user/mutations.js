import {
  adminDeleteUser,
  adminUpdateUser,
  changePassword,
  deleteUser,
  login,
  logout,
  signup,
  updateUser,
} from './user_mutations';

export default {
  ...adminDeleteUser,
  ...adminUpdateUser,
  ...changePassword,
  ...deleteUser,
  ...login,
  ...logout,
  ...signup,
  ...updateUser,
};
