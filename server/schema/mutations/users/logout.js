import UserType from '../../types/user_type';
import { logout } from '../../../models';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      logout({ req });
    }
  },
};
