const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    _id: String
    name: String
    poster: String
    title: Int
    lastupdated: String
  }

  type Query {
    movies(limit: Int, offset: Int): [Movie]
  }
`;

module.exports = typeDefs;
