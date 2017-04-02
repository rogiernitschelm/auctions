require('babel-register');
const fs = require('fs');
const path = require('path');
const userSchematic = require('./models/user/schema').schematic;

const file = '../web_client/src/customization/validations.json';
const validationsSchema = {
  user: userSchematic,
  auction: {},
  bids: {},
  messages: {},
};

const jsonUserSchematic = JSON.stringify(validationsSchema, null, 3);

fs.writeFile(path.join(__dirname, file), jsonUserSchematic, error => {
  if (error) {
    console.error(error);
  } else {
    console.log(`The validations have been correctly placed inside the following folder: ${file}`);
  }
});
