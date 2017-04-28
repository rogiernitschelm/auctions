import { isLoggedIn } from '../../../helpers';
import User from '../model';

export default async ({ req }) => {
  isLoggedIn(req);

  try {
    const foundUser = await User.findById(req.user._id);
    foundUser.remove();
    return { status: 200 };
  } catch (error) {
    throw error;
  }
};
