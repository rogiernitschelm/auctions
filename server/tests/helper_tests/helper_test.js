import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as actions from '../../helpers/authorization_helper';

const { isLoggedIn } = actions;

describe('Authorization', () => {
  describe('the isLoggedIn-helper', () => {
    it('correctly throws an error when not logged in.', () => {
      expect(() => isLoggedIn({ req: { user: null } })).to.throw(/You are not logged in./);
    });
  });
});
