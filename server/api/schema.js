import {
  GraphQLSchema,
} from "graphql";

import RootQueryType from "./queries.js"
import MutationType from "./mutations.js"

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});

export default schema;