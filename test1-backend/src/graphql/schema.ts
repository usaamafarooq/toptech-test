import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type WordCount {
    word: String!
    count: Int!
  }

  type Query {
    wordCloud(length: Int!): [WordCount!]!
  }
`;
