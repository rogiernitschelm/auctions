import { Auction } from '../models';

export const validateOwner = (ownerId, sellerId) => {
  if (String(ownerId) === sellerId) {
    return;
  }

  throw new Error('You are not the owner.');
};

export const validateNoBids = auction => {
  if (auction._bids.length > 0) {
    throw new Error('The requested action is not possible when there are bids present.');
  }
};

export const validateNoActiveAuctions = user => {
  if (user.usertype === 'seller') {
    Auction.find().then(auctions => {
      const activeAuctions = auctions.find(auction => auction.endDateTime > new Date());

      if (activeAuctions.length > 0) {
        throw new Error('You have active auctions');
      }

      return;
    });
  }
};
