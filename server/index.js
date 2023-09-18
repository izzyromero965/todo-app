import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./Schemas/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { auth } from "express-openid-connect";

const PORT = process.env.PORT || 4000;

async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();

  // Auth0 configuration
  const authConfig = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server started successfully");
  });
  app.use(auth(authConfig));
  try {
    await mongoose.connect(process.env.mongodb);
    console.log(`Connected to MongoDB successfully`);
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
}

initServer();
