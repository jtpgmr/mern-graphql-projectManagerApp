import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";

import { Client, Project } from "../models/index.js";
import { ClientType, ProjectType } from "./types.js";

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

export default RootQueryType;
