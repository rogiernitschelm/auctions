# Auction template

## Structure

This is my auction site. It uses an Express.js back-end, GraphQL
middleware and a React front-end with Apollo.

## Server

Requests are made using GraphQL. Each request is being funneled to the
authorization-controllers. These check authorization and send requests to the
correct method on the models.

Model-validation is handled within the model-schema. Authentication is done
with passport using a local-strategy.

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
        firstName: "Kees",
        lastName: "van de Koekjesfabriek",
        chamberOfCommerce: "123456789a", 
        companyName: "Hoogle.nom",
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
