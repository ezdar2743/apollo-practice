const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Query{
    hello:String!
    ping:String!
  }
`;
const resolvers = {
  Query: {
    hello() {
      return "ezdar";
    },
    ping() {
      return "pong";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
