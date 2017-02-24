import { default as createAuction } from './create';
import { default as removeAuction } from './remove';

export default {
  ...createAuction,
  ...removeAuction
};
