import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import expressGraphQL from 'express-graphql';
import connectMongo from 'connect-mongo';
import cors from 'cors';
import { beforeEach } from 'mocha';

import { schema } from '../models/index';
import passport from '../authentication';

const DB_URI = 'mongodb://localhost/auction_test';
const PORT = 3030;
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
};

const MongoStore = connectMongo(session);
const application = express();

mongoose.Promise = global.Promise;
mongoose.connect(DB_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB-test instance.'))
  .on('error', () => console.log('Error occured connecting to MongoDB-test instance.'));
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

const testServer = application.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

beforeEach(done => {
  mongoose.connection.db.dropDatabase(() => done());
});

export default testServer;
