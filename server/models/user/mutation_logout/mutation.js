import UserType from '../usertype';
import logout from './method';

export default {
  logout: {
    type: UserType,
    resolve(parentValue, args, req) {
      return logout({ req, args });
    }
  },
};
