import UserType from '../../types/user_type';
import router from '../../../router';

export default {
  removeAccount: {
    type: UserType,
    resolve(parentValue, args, req) {
      return router({ req, args, requestType: 'removeAccountMutation' });
    }
  },
};
