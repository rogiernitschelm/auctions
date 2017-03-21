'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('./application/index');

require('./application/authentication');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DB_URI = 'mongodb://localhost/test1';
var PORT = 3000;
var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
};

var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);
var application = (0, _express2.default)();

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(DB_URI);
_mongoose2.default.connection.once('open', function () {
  return console.log('Connected to MongoDB instance.');
}).on('error', function () {
  return console.log('Error occured connecting to MongoDB instance.');
});

application.use((0, _expressSession2.default)({
  resave: true,
  saveUninitialized: true,
  secret: 'abcd1234',
  store: new MongoStore({
    url: DB_URI,
    autoReconnect: true
  })
}));

application.use((0, _cors2.default)(corsOptions));
application.use(_passport2.default.initialize());
application.use(_passport2.default.session());
application.use('/graphql', (0, _expressGraphql2.default)({
  schema: _index.schema,
  graphiql: true
}));

application.listen(PORT, function () {
  console.log('Server is listening on port ' + PORT);
});