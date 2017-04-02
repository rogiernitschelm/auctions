import { isLoggedIn } from '../../../../helpers';

export default ({ req, args }) => {
  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    req.user.update({ ...args }, { runValidators: true })
      .then(() => resolve(req.user))
      .catch(error => reject(error));
  });
};
