import {
  GraphQLEnumType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { Client, Project } from "../models/index.js";
import { ClientType, ProjectType } from "./types.js";

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  fields: {
    // POST a client
    addClient: {
      type: ClientType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
        phone: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save();
      },
    },

    // PUT a client
    updateClient: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
        name: {
          type: GraphQLString,
        },
        phone: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              phone: args.phone,
              email: args.email,
            },
          },
          {
            new: true,
          }
        );
      },
    },

    // DELETE a client
    deleteClient: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        Project.find({
          clientId: args.id,
        }).then((projects) => {
          projects.forEach((project) => {
            project.remove();
          });
        });
        return Client.findByIdAndDelete(args.id);
      },
    },

    // POST a project
    addProject: {
      type: ProjectType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        description: {
          type: GraphQLNonNull(GraphQLString),
        },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: {
                value: "Not Started",
              },
              pending: {
                value: "In Progress",
              },
              complete: {
                value: "Completed",
              },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
    },

    // PUT a project
    updateProject: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
        name: {
          type: GraphQLString,
        },
        description: {
          type: GraphQLString,
        },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: {
                value: "Not Started",
              },
              pending: {
                value: "In Progress",
              },
              complete: {
                value: "Completed",
              },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          {
            new: true,
          }
        );
      },
    },

    // DELETE a project
    deleteProject: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      },
    },
  },
});

export default MutationType;
