import UserType from '../../types/user_type';
import { removeAccount } from '../../../models';

export default {
  removeAccount: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (req.user) {
        return removeAccount({ req, args });
      }

      throw Error('You need to be logged in to remove your account.');
    }
  },
};
