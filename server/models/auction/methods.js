import { Auction } from '../';

export const createAuction = (id, args) => {
  return Auction.create({ ...args, _owner: id });
};

export const removeAuction = (id, auction) => {
  return Auction.findById(id).then(foundAuction => foundAuction.remove()).then(() => auction);
};

export const updateAuction = (id, args, req) => {
  return Auction.findById(id)
    .then(auction => {
      if (auction._bids.length > 0) {
        throw new Error('There is a bid present. It is no longer possible to update.');
      }

      if (auction._owner.equals(req.user._id) || req.user.usertype === 'admin') {
        return Auction.update({ _id: id }, { ...args });
      }
    });
};
