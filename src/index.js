const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const articles = require("./db/Article");
// 블로그 > 카테고리,게시글,댓글,유저,좋아요,이미지
const typeDefs = fs.readFileSync("./src/schema.graphql", "utf8");
const resolvers = {
  Query: {
    articles(parent, args) {
      //parent, args를 잘 조합해서
      //디비 , Memcached에 날리든 http에 날리든

      return articles;
    },
  },
  Article: {
    author(parent) {
      //작성자가 부모에 없음 >parent.authorId > DB에 요청
      return {
        id: 1,
        createdAt: "",
        updatedAt: "",
        nickName: "ezdar",
        imageId: 10,
      };
    },
    comments(parent) {
      // parent.id = article id 댓글테이블을 뒤져서 리스트
      return [
        {
          id: 1,
          createdAt: "",
          updatedAt: "",
          authorId: 1,
          content: "coment!!!",
        },
      ];
    },
  },
  User: {
    profileImg(parent) {
      //prent.imageId > Db
      return {
        id: 1,
        createdAt: "",
        updatedAt: "",
        url: "...",
      };
    },
  },
  Comment: {
    author(parent) {
      //user id 뒤져서
      return {
        id: 1,
        createdAt: "",
        updatedAt: "",
        nickName: "ezdar",
        imageId: 10,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
