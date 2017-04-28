import { isAdmin, isNotSelf } from '../../../helpers';
import User from '../model';

export default async ({ req, args }) => {
  isAdmin({ req });
  isNotSelf({ req, args });

  try {
    const result = await User.findByIdAndRemove(args.userId);
    return result;
  } catch (error) {
    throw error;
  }
};
