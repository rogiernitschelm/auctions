import UserType from '../usertype';

export default {
  type: UserType,
  resolve(parentValue, args, req) {
    return req.user;
  }
};
