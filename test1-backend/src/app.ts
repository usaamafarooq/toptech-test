import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const startServer = async () => {
  mongoose.connect(
    "mongodb+srv://usama-farooq:2WzwLzPrWsAtX2TG@cluster0.fdfk6b0.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(8080, () =>
    console.log(`Server ready at http://localhost:8080${server.graphqlPath}`)
  );
};

startServer();
