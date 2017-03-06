import {
  signup,
  login,
} from '../models';

export default ({ req, args, requestType }) => {
  if (req.user) {
    throw new Error('You already have an account.');
  }

  switch (requestType) {
    case 'signupMutation':
      return signup({ req, args });
    case 'loginMutation':
      return login({ req, args });
    default:
      throw new Error('Valid request-type is missing.');
  }
};
