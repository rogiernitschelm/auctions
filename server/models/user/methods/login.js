import passport from 'passport';

export default ({ email, password, req }) => {
  if (req.user) {
    throw new Error('You are already logged in.');
  }

  return new Promise((resolve, reject) => {
    passport.authenticate('local', (error, user) => {
      if (!user) {
        reject('Invalid credentials.');
      }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
};
