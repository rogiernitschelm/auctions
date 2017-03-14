import {
  Auction,
  updateAccount,
  removeAccount,
  createAuction,
  updateAuction,
  removeAuction,
} from '../models';
import { validateOwner, validateNoBids, validateNoActiveAuctions } from './helpers';

export default ({ req, args, requestType }) => {
  const { user, user: { id } } = req;

  switch (requestType) {
    case 'updateAccountMutation':
      return updateAccount(id, args);

    case 'removeAccountMutation':
      validateNoActiveAuctions(user);
      return removeAccount(id, user);

    case 'createAuctionMutation':
      return createAuction(id, args);

    case 'updateAuctionMutation':
      return Auction.findById(args.id)
        .then(auction => {
          validateNoBids(auction);
          validateOwner(auction._owner, id);
          return updateAuction(id, args);
        });

    case 'removeAuctionMutation':
      return Auction.findById(args.id)
        .then(auction => {
          validateNoBids(auction);
          validateOwner(auction._owner, id);
          return removeAuction(auction);
        });

    default:
      throw new Error('Valid requset-type is missing.');
  }
};
