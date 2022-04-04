const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Query{
    hello:String!
  }
`;
const resolvers = {
  Query: {
    hello() {
      return "world";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
