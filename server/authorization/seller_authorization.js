import {
  updateAccount,
  removeAccount,
  createAuction,
  updateAuction,
  removeAuction
} from '../models';

export default ({ req, args, requestType }) => {
  const { user: { id, usertype } } = req;

  if (!usertype.includes('seller' || 'admin')) {
    throw new Error('You need to be a seller or administrator.');
  }

  if ((args.id || args._id) && usertype !== 'admin') {
    throw new Error('An id has been passed, but you are not an administrator.');
  }

  switch (requestType) {
    case 'updateAccount':
      return updateAccount(id, args);
    case 'removeAccount':
      return removeAccount(id, req.user);
    // case 'createAuction':
    //   return createAuction();
    // case 'updateAuction':
    //   return updateAuction();
    // case 'removeAuction':
    //   return removeAuction();
    default:
      throw new Error('Valid requset-type is missing.');
  }
};
