import {
  updateAccount,
  removeAccount,
  createAuction,
  updateAuction,
  removeAuction
} from '../models';

export default ({ req, args, mutationType }) => {
  const { user, user: { id, usertype } } = req;

  if (!user) {
    throw new Error('You need to be logged in as a seller to continue.');
  }

  if (!usertype.includes('seller' || 'admin')) {
    throw new Error('You need to be a seller or administrator.');
  }

  if ((args.id || args._id) && usertype !== 'admin') {
    throw new Error('An id has been passed, but you are not an administrator.');
  }

  switch (mutationType) {
    case 'updateAccount':
      return updateAccount(id, args);
    case 'removeAccount':
      return removeAccount(id);
    case 'createAuction':
      return createAuction();
    case 'updateAuction':
      return updateAuction();
    case 'removeAuction':
      return removeAuction();
    default:
      throw new Error('Valid mutation-type is missing.');
  }
};
