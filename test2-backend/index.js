const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema"); // Path to your GraphQL schema
const resolvers = require("./graphql/resolver"); // Path to your resolvers
const db = require("./database/index"); // Path to your MongoDB connection file

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
