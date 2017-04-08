import mongoose from 'mongoose';
import { beforeEach } from 'mocha';

const mongoUri = 'mongodb://localhost/auction_tests';

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, {
  server: {
    auto_reconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  }
});

export const connection = mongoose.connection;

connection.on('error', error => {
  if (error.message.code === 'ETIMEOUT') {
    console.log(error);
    mongoose.connect(mongoUri);
  }
});

connection.once('open', () => {
  console.log(`MongoDB successfully connected to ${mongoUri}`);
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
