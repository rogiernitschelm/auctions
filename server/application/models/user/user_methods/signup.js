import User from '../model';

export default async ({ req, args }) => {
  if (req.user) {
    throw new Error('You already have an account.');
  }

  if (!args.email || !args.password) {
    throw new Error('You must provide an email and password.');
  }
  
  const user = new User({ req, ...args });
  const foundUser = await User.findOne({ email: args.email });

  if (foundUser) {
    throw new Error('This e-mail is already in use.');
  }

  const savedUser = await user.save();
  return new Promise((resolve, reject) => {
    req.login(savedUser, error => {
      if (error) {
        reject(error);
      }

      resolve(savedUser);
    });
  });
};
