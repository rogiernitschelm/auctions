# Test Queries

## Mutations

### Users

    mutation {
      signup(email: "aliba@baba.com", password: "abcd1234") {
        email
        id
      }
    }

### Auctions

    mutation {
       createAuction (
         title: "videobood prikkie"
         description: "dafsdfsaadsfadfssaf"
       	 type: "a"
         startingPrice: 1
         endDateTime: "2020-02-23T14:06:50.881Z"

       ) {
         title
         description

       }
    }
