import { isLoggedIn } from '../../../helpers';

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
