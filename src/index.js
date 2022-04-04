const { ApolloServer } = require("apollo-server");

// 블로그 > 카테고리,게시글,댓글,유저,좋아요,이미지
const typeDefs = `
type Query{
  """ 특정 카테고리 """ 
  articles(where:ArticlesWhereInput):[Article!]!
}

input ArticlesWhereInput{
  categoryId:ID
}

"""게시글"""
type Article {
  id: ID!

  createdAt: String!
  updatedAt: String!
  deletedAt: String

  """#카테고리 (없으면 기타)"""
  category: Category
  """#제목"""
  title: String!
  """# 조회수"""
  viewNum: Int!
  """# 내용"""
  content: String!
  """# 작성자"""
  author: User!
  """# 댓글들"""
  comments: [Comment!]!
  """# 좋아요"""
  likes: [Like!]!
  """#섬네일"""
  thumbnail: Image
}

type Category {
  id: ID!
  createdAt: String!
  updatedAt: String!
  deletedAt: String

  """#카테고리 이름"""
  name: String!
  """#해당 카테고리의 Articles"""
  articles: [Article!]!
}

type Comment {
  id: ID!
  createdAt: String!
  updatedAt: String!
  deletedAt: String
  """#작성자"""
  author: User!
 """ #내용"""
  content: String!
}

type User {
  id: ID!
  createdAt: String!
  updatedAt: String!
  deletedAt: String

  nickName: String!
  profileImg: Image
}

type Like {
  id: ID!
  createdAt: String!
  """#좋아요 한사람"""
  author: User!
  """#좋아요 받은 게시물"""
  article: Article!
}

type Image {
  id: ID!
  createdAt: String!
  updatedAt: String!
  deletedAt: String

  """#이미지 주소"""
  url: String!
}
`;
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
