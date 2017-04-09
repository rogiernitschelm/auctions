import request from 'supertest';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import { validUser } from '../../test_models';
import User from '../../../models/user/model';
import application from '../../test_helper';

describe('GraphQL login mutation', () => {
  beforeEach(async () => {
    await User.create(validUser);
  });

  it('logs in a user', async () => {
    const query = `
      mutation {
        login(
          email: "${validUser.email}",
          password:"${validUser.password}",
        ) {
          email
        }
      }
    `;

    const loginRequest = await request(application)
      .post('/graphql')
      .send({ query });

    expect(JSON.parse(loginRequest.text).data.login.email).to.eq(validUser.email);
  });

  it('does not login a user with invalid credentials', async () => {
    const query = `
      mutation {
        login(
          email: "${validUser.email}",
          password:"abcd1235",
        ) {
          email
        }
      }
    `;

    const loginRequest = await request(application)
      .post('/graphql')
      .send({ query });

    const parsedResult = JSON.parse(loginRequest.text);

    expect(parsedResult.data.login).to.eq(null);
    expect(parsedResult.errors[0].message).to.eq('Invalid credentials');
  });
});
