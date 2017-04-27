import Auction from '../model';
import { isSeller } from '../../../helpers';

export default async ({ req, args }) => {
  isSeller({ req });

  try {
    const auction = new Auction({ ...args });
    const savedAuction = await auction.save();
    return savedAuction;
  } catch (error) {
    throw (error);
  }
};
