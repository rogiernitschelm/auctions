import UserType from '../../types/user_type';
import router from '../../../router';

export default {
  removeAccount: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (!req.user) throw new Error('You do not have an account.');

      return router({ req, args, requestType: 'removeAccountMutation' });
    }
  },
};
