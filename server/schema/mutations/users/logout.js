import UserType from '../../types/user_type';
import funnel from '../funnel';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      if (!req.user) throw new Error('You are not logged in.');

      return funnel({ req, args, requestType: 'logout' });
    }
  },
};
