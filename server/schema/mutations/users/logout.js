import UserType from '../../types/user_type';
import { logout } from '../../../models';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (req.user) {
        return logout({ req, args });
      }

      throw Error('You are not logged in.');
    }
  },
};
