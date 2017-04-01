import UserType from '../usertype';
import { queryCurrentUser } from '../user_methods';

export default {
  type: UserType,
  resolve(parentValue, args, req) {
    return queryCurrentUser(req);
  }
};
