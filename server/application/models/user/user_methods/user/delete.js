import { isLoggedIn } from '../../../helpers';

export default ({ req }) => {
  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    req.user.remove(error => {
      if (error) {
        reject(error);
      }

      resolve('success');
    });
  });
};
