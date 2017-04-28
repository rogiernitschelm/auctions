import updateUser from './mutation_update/mutation';
import signup from './mutation_signup/mutation';
import deleteUser from './mutation_delete/mutation';
import changePassword from './mutation_change_password/mutation';
import login from './mutation_login/mutation';
import logout from './mutation_logout/mutation';
import adminUpdateUser from './mutation_admin_update/mutation';
import adminDeleteUser from './mutation_admin_delete/mutation';

export { default as queryUsers } from './query_users/query';
export { default as queryCurrentUser } from './query_current_user/query';

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
