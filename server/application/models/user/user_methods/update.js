import User from '../model';
import { isLoggedIn } from '../../helpers/authorization_helper';

export default ({ req, args }) => {
  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    req.user.update(args, error => {
      if (error) {
        reject(error);
      }
    });
    resolve(req.user);
  });
};
