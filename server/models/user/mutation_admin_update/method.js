import { isAdmin, isNotSelf } from '../../../helpers';
import User from '../model';

export default ({ req, args }) => {
  isAdmin({ req });
  isNotSelf({ req, args });

  return new Promise((resolve, reject) => {
    User.findById(args.userId)
      .then(user => {
        user.update({ ...args })
          .then(() => resolve({ user, ...args }))
          .catch(error => reject(error));
      })
      .catch(error => {
        reject(error);
      });
  });
};
