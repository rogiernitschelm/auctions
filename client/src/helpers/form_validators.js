import { schematic as userSchematic } from '../../../server/models/user/schema.js';

export const formValidator = values => {
  for (const value of Object.keys(values)) {
    console.log(value, values[value])
  }
}
