import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import expressGraphQL from 'express-graphql';
import connectMongo from 'connect-mongo';
import cors from 'cors';

import { schema } from './models/index';
import passport from './authentication';

const DB_URI = 'mongodb://localhost/test1';
const PORT = 3000;
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
};

const MongoStore = connectMongo(session);
const application = express();

mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', () => console.log('Error occured connecting to MongoDB instance.'));
// if (development) mongoose.set('debug', true);


application.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'abcd1234',
  store: new MongoStore({
    url: DB_URI,
    autoReconnect: true
  })
}));

application.use(cors(corsOptions));
application.use(passport.initialize());
application.use(passport.session());
application.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const server = application.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// testing

const User = mongoose.model('user')
for (let i = 0; i < 100; i++) {
  const email = `mailjan${i}@hoogle.nom`;
  // 
  // User.create({
  //   coc: 'abc1234',
  //   company: 'Boogle.dom',
  //   email,
  //   firstname: 'Kees',
  //   lastname: 'Jan',
  //   password: 'abcd1234',
  //   usertype: 'buyer',
  // });
}


//
export default server;
