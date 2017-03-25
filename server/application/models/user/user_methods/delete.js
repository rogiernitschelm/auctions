import { isLoggedIn } from '../../helpers/authorization_helper';

export default async ({ req }) => {
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
