import { isLoggedIn } from '../../../../helpers';
import User from '../../model';

export default async ({ req, args }) => {
  const { password, newPassword } = args;

  isLoggedIn(req);

  return new Promise((resolve, reject) => {
    User.findOne({ email: req.user.email })
      .then(user => {
        user.comparePassword(password, (comparePasswordError, isMatch) => {
          if (comparePasswordError) return reject(comparePasswordError);
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
  });
};
