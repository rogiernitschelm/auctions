import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import Auction from '../../models/auction/model';
import User from '../../models/user/model';
import schema from '../../models/schema';

import { validUser } from '../test_models';

describe('GraphQL create auction mutation', () => {
  beforeEach(async () => {
    await User.create(validUser);
  });

  it('creates an auction', async () => {
    const query = `
      mutation {
        createAuction(
          title: "Hello I am an auction.",
          startingPrice: 1,
          duration: 24
        ) {
          id
          title
          startingPrice
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const foundAuction = await Auction.findOne({ title: 'Hello I am an auction.' });

    expect(foundAuction.startingPrice).to.eq(1);
  });

  it('does not create an auction when the title is too short', async () => {
    const query = `
      mutation {
        createAuction(
          title: "Hi",
          startingPrice: 1,
          duration 24
        ) {
          id
          title
          startingPrice
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const foundAuction = await Auction.findOne({ title: 'Hi' });

    expect(foundAuction).to.eq(null);
  });

  it('does not create an auction without a starting price', async () => {
    const query = `
      mutation {
        createAuction(
          title: "Hello I am an auction.",
          duration: 24
        ) {
          id
          title
          startingPrice
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const foundAuction = await Auction.findOne({ title: 'Hi' });

    expect(foundAuction).to.eq(null);
  });
});
