import passport from 'passport';

export default (req, user) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (error, userFound) => {
      if (!userFound) {
        reject('Invalid credentials');
      }

      req.login(user, () => resolve(user));
    })({ body: { email: user.email, password: user.password } });
  });
};
