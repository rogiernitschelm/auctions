import UserType from '../../types/user_type';
import router from '../../../router';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (!req.user) throw new Error('You are not logged in.');

      return router({ req, args, requestType: 'logoutMutation' });
    }
  },
};
