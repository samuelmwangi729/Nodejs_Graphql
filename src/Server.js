
require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const connectDB = require("./Config/db");
const typeDefs = require("./Graphql/typeDefs");
const resolvers = require("./Graphql/resolvers");

const startServer = async () => {
  try {
    await connectDB();

    const app = express();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();

    app.use(
      "/graphql",
      express.json(),
      expressMiddleware(server)
    );

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error("Application startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
