import {
  signup,
  login
} from '../models';

export default ({ req, args, requestType }) => {
  if (req.user) {
    throw new Error('You already have an account.');
  }

  switch (requestType) {
    case 'signup':
      return signup({ req, args });
    case 'login':
      return login({ req, args });
    // case 'createAuction':
    //   return createAuction();
    // case 'updateAuction':
    //   return updateAuction();
    // case 'removeAuction':
    //   return removeAuction();
    default:
      throw new Error('Valid request-type is missing.');
  }
};
