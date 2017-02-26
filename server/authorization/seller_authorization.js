import {
  Auction,
  updateAccount,
  removeAccount,
  createAuction,
  updateAuction,
  removeAuction,
} from '../models';

export default ({ req, args, requestType }) => {
  const { user, user: { id, usertype } } = req;

  if (!usertype.includes('seller' || 'admin')) {
    throw new Error('You need to be a seller or administrator.');
  }

  const validateOwner = (ownerId, sellerId) => {
    if (String(ownerId) === sellerId) {
      return;
    }

    throw new Error('You are not the owner.');
  };

  switch (requestType) {
    case 'updateAccountMutation':
      return updateAccount(id, args);

    case 'removeAccountMutation':
      return removeAccount(id, user);

    case 'createAuctionMutation':
      return createAuction(id, args);

    case 'updateAuctionMutation':
    return Auction.findById(args.id)
      .then(result => {
        validateOwner(result._owner, id);
        
        return updateAuction(id, args);
      });

    case 'removeAuctionMutation':
      return Auction.findById(args.id)
        .then(result => {
          validateOwner(result._owner, id);

          return removeAuction(id, user);
        });

    default:
      throw new Error('Valid requset-type is missing.');
  }
};
