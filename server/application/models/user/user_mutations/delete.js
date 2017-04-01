import UserType from '../usertype';
import { deleteUser } from '../user_methods';

export default {
  deleteUser: {
    type: UserType,
    resolve(parentValue, args, req) {
      return deleteUser({ req, args });
    }
  },
};
