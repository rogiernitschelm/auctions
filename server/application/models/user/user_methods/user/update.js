import { isLoggedIn } from '../../../helpers';
import User from '../../model';

export default ({ req, args }) => {
  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    User.findOne(req.user._id, (error, user) => {
      if (error) {
        reject(error);
      }

      Object.assign(user, args);
      user.save((userSaveError, updatedUser) => {
        if (userSaveError) {
          reject(userSaveError);
        }

        resolve(updatedUser);
      });
    });
  });
};
