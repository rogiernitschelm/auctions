import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';
import expressGraphQL from 'express-graphql';
import connectMongo from 'connect-mongo';

import developmentConfiguration from './configuration/development';
import './models';
import schema from './schema';

const MongoStore = connectMongo(session);

let PORT;
let MONGO_URI;

switch (process.env.NODE_ENV) {

  case 'production':
    PORT = developmentConfiguration.port;
    MONGO_URI = developmentConfiguration.mongoDBUri;
    break;

  case 'development':
    PORT = developmentConfiguration.port;
    MONGO_URI = developmentConfiguration.mongoDBUri;
    break;

  case 'testing':
    PORT = developmentConfiguration.port;
    MONGO_URI = developmentConfiguration.mongoDBUri;
    break;

  default:
    PORT = developmentConfiguration.port;
    MONGO_URI = developmentConfiguration.mongoDBUri;
    break;

}

const application = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', () => console.log('Error occured connecting to MongoDB instance.'));

application.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'abcd1234',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));

application.use(passport.initialize());
application.use(passport.session());
application.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

application.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
