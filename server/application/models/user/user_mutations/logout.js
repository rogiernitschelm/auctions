import UserType from '../usertype';
import { logout } from '../user_methods';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      return logout({ req, args });
    }
  },
};
