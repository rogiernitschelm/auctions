import passport from 'passport';

export default (req, { email, password }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (error, userFound) => {
      if (!userFound) {
        reject('Invalid credentials');
      }

      req.login(userFound, notFoundError => {
        if (notFoundError) {
          reject(notFoundError);
        }

        resolve(userFound);
      });
    })({ body: { email, password } });
  });
};
