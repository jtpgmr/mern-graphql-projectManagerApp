import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";

import connectDB from "./config/db.js";
import schema from "./schema/schema.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB Project Database
connectDB();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`.yellow));
