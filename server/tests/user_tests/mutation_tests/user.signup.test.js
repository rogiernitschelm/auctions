import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import User from '../../../models/user/model';
import application from '../../test_helper';

describe('GraphQL signup mutation', () => {
  it('signs up a user', async () => {
    const query = `
      mutation {
        signup(
          email: "mail@moogle.nom",
          password:"abcd1234",
          usertype:"seller",
          firstname:"Henk",
          lastname: "Keesma",
          coc: "12345",
          company:"ING"
        ) {
          email
        }
      }
    `;

    await request(application)
      .post('/graphql')
      .send({ query });

    const foundUser = await User.findOne({ email: 'mail@moogle.nom' });

    expect(foundUser.password).to.not.eq('abcd1234');
    expect(foundUser.firstname).to.eq('Henk');
    expect(foundUser.usertype).to.eq('seller');
    expect(foundUser.company).to.eq('ING');
  });

  describe('when wrong information is provided', () => {
    it('does not sign a user up when an invalid email is provided', async () => {
      const query = `
        mutation {
          signup(
            email: "mailmoogle.nom",
            password:"abcd1234",
            usertype:"seller",
            firstname:"Henk",
            lastname: "Keesma",
            coc: "12345",
            company:"ING"
          ) {
            email
          }
        }
      `;

      await request(application)
        .post('/graphql')
        .send({ query });

      const foundUser = await User.findOne({ email: 'mailmoogle.nom' });
      expect(foundUser).to.eq(null);
    });

    it('does not sign a user up when an invalid password is provided', async () => {
      const query = `
        mutation {
          signup(
            email: "mail@moogle.nom",
            password:"abcd123",
            usertype:"seller",
            firstname:"Henk",
            lastname: "Keesma",
            coc: "12345",
            company:"ING"
          ) {
            email
          }
        }
      `;

      await request(application)
        .post('/graphql')
        .send({ query });

      const foundUser = await User.findOne({ email: 'mail@moogle.nom' });
      expect(foundUser).to.eq(null);
    });

    it('does not sign a user up when no usertype is provided', async () => {
      const query = `
        mutation {
          signup(
            email: "mail@moogle.nom",
            password:"abcd1234",
            firstname:"Henk",
            lastname: "Keesma",
            coc: "12345",
            company:"ING"
          ) {
            email
          }
        }
      `;

      await request(application)
        .post('/graphql')
        .send({ query });

      const foundUser = await User.findOne({ email: 'mail@moogle.nom' });
      expect(foundUser).to.eq(null);
    });

    // it('does not sign a user up when the usertype admin is provided\n', async () => {
    //   const query = `
    //     mutation {
    //       signup(
    //         email: "mail@moogle.nom",
    //         password:"abcd1234",
    //         usertype: "admin",
    //         firstname:"Henk",
    //         lastname: "Keesma",
    //         coc: "12345",
    //         company:"ING"
    //       ) {
    //         email
    //       }
    //     }
    //   `;
    //
    //   await request(application)
    //     .post('/graphql')
    //     .send({ query });
    //
    //   const foundUser = await User.findOne({ email: 'mail@moogle.nom' });
    //   expect(foundUser).to.eq(null);
    // });
  });
});
