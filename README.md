# Auction template

## Structure

This is my auction site. It uses an Express.js back-end, GraphQL
middleware and a React front-end with Apollo. In addition I use redux-form for
easy form handling.

Because Apollo already provides a store for the queries, I have decided to not
use Redux other than form-handling.

## Use

Starting the application

    npm start
    localhost:3000/graphql

Testing the application

    npm test

Create a user (copy and paste):

    mutation {
      signup(
        email: "mail@hoogle.nom",
        password: "abcd1234",
        usertype: "seller"
      ) {
        id
        email
      }
    }

Query:

    query {
      currentUser {
        id
        email
        usertype
      }
    }
