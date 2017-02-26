import UserType from '../../types/user_type';
import funnel from '../../funnel';

export default {
  removeAccount: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (!req.user) throw new Error('You do not have an account.');

      return funnel({ req, args, requestType: 'removeAccountMutation' });
    }
  },
};
