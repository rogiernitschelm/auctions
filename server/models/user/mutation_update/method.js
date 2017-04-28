import User from '../model';
import { isLoggedIn } from '../../../helpers';

export default async ({ req, args }) => {
  isLoggedIn(req);


  if (args.password) {
    throw Error('You should not update the password via this method.');
  }

  try {
    const updatedUser = await User.findOneAndUpdate(req.user._id, args, {
      runValidators: true,
      new: true
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }

  // return new Promise((resolve, reject) => {
  //   req.user.update({ ...args }, { runValidators: true })
  //     .then(() => resolve(req.user))
  //     .catch(error => reject(error));
  // });
};
