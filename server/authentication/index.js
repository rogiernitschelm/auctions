import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../models/user/model';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user);
  });
});

passport.use(new Strategy({ usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (userFindError, user) => {
      if (userFindError) {
        return done(userFindError);
      }

      if (!user) {
        return done(null, false, 'Invalid credentials.');
      }

      user.comparePassword(password, (comparePasswordError, isMatch) => {
        if (comparePasswordError) {
          return done(comparePasswordError);
        }

        if (isMatch) {
          return done(null, user);
        }

        return done(null, false, 'Invalid credentials.');
      });
    });
  }
));

export default passport;
