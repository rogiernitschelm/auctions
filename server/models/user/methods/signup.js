import User from '../model';

export default ({ email, password, req, ...args }) => {
  const user = new User({ email, password, req, ...args });

  if (req.user) {
    throw new Error('You already have an account.');
  }

  if (!email || !password) {
    throw new Error('You must provide an email and password.');
  }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        throw new Error('This e-mail is in use.');
      }

      return user.save();
    })

    .then(createdUser => {
      return new Promise((resolve, reject) => {
        req.logIn(createdUser, error => {
          if (error) { reject(error); }
          resolve(createdUser);
        });
      });
    });
};
