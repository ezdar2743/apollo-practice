const { ApolloServer } = require("apollo-server");
const fs = require("fs");

// 블로그 > 카테고리,게시글,댓글,유저,좋아요,이미지
const typeDefs = fs.readFileSync("./src/schema.graphql", "utf8");
const resolvers = {
  Query: {
    articles(parent, args) {
      //parent, args를 잘 조합해서
      //디비 , Memcached에 날리든 http에 날리든
      return [
        {
          id: 1,
          title: "hi",
          categoryId: 1,
          createdAt: "",
          updatedAt: "",
          viewNum: 12,
          contetn: "hihihi",
          authorId: 1,
          thumbnailId: 3,
        },
      ];
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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000);
