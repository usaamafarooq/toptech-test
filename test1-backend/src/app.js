"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect("mongodb+srv://usama-farooq:2WzwLzPrWsAtX2TG@cluster0.fdfk6b0.mongodb.net/sample_mflix?retryWrites=true&w=majority");
    const db = mongoose_1.default.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => console.log("Connected to MongoDB"));
    const app = (0, express_1.default)();
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    yield server.start();
    server.applyMiddleware({ app });
    app.listen(8080, () => console.log(`Server ready at http://localhost:8080${server.graphqlPath}`));
});
startServer();
