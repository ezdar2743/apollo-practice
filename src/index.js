const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Query{
    hello:String!
    ping:String!
    user:User!
  }
  type User{
      name: String!
      
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
    user() {
      return "kku"; // 페어런트 밑에 보내줌 props 로
    },
  },
  User: {
    name(parent) {
      return "ezdar";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
