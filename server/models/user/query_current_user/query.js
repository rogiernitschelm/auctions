import UserType from '../usertype';
import queryCurrentUser from './method';

export default {
  type: UserType,
  resolve(parentValue, args, req) {
    return queryCurrentUser(req);
  }
};
