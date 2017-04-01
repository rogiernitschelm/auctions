import { isLoggedIn } from '../../helpers';

export default ({ req, args }) => {
  const { user } = req;
  const { password, newPassword } = args;

  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    user.comparePassword(password, (comparePasswordError, isMatch) => {
      if (comparePasswordError) {
        return reject(comparePasswordError);
      }

      if (isMatch) {
        user.password = newPassword;
        user.save()
          .then(savedUser => resolve(savedUser))
          .catch(error => reject(error));
      } else {
        return reject('Invalid credentials.');
      }
    });
  });
};
