import passport from 'passport';

export default ({ args: { email, password }, req }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (error, user) => {
      if (!user) {
        reject('Invalid credentials.');
      }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
};
