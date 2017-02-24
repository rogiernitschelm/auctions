import { Auction } from '../';

export const createAuction = ({ ...args, req }) =>
  Auction.create({ ...args, _owner: req.user.id });

export const removeAuction = ({ id, req }) => {
  const auctionToDelete = Auction.findById(id, (error, auction) => {
    if (auction._owner.equals(req.user._id) || req.user.usertype === 'admin') {
      return auction.remove();
    }
  });

  return auctionToDelete;
};

export const updateAuction = ({ id, ...args, req }) => {
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
