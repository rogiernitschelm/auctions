import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy } from 'passport-local';

const User = mongoose.model('user');

passport.serializeUser((user, done) => { done(null, user.id); });
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

export const login = ({ email, password, req }) => {
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

export const signup = ({
  email,
  password,
  ...args,
  req
}) => {
  const user = new User({
    email,
    password,
    ...args,
    req
  });

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
