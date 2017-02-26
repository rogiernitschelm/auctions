import { default as createAuction } from './create';
import { default as removeAuction } from './remove';
import { default as updateAuction } from './update';

export default {
  ...createAuction,
  ...removeAuction,
  ...updateAuction,
};
