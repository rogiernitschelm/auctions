import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as actions from '../';

const { isLoggedIn, isNotLoggedIn, isBuyer, isSeller, isAdmin } = actions;

const seller = { user: { usertype: 'seller' } };
const buyer = { user: { usertype: 'buyer' } };

describe('Authorization', () => {
  describe('the isLoggedIn-helper', () => {
    it('correctly throws an error when not logged in.', () => {
      expect(() => isLoggedIn({ req: { user: null } })).to.throw(/You are not logged in./);
    });
  });
});
