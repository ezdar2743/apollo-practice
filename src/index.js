const { ApolloServer } = require("apollo-server");

// 블로그 > 카테고리,게시글,댓글,유저,좋아요,이미지
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
      return "kku"; // 페어런트 밑에 보내줌 props 로 타고밑으로 감
    },
  },
  User: {
    name() {
      return "ezdar";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
