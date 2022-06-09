import { GraphQLObjectType, GraphQLSchema } from "graphql";

// Import queries

import { jobs } from "./queries"

// Import mutations

import { postJob } from "./mutations"	

// Define QueryType

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type.",
  fields: {
    jobs
  }, 
});

// Define MutationType

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type.",
  fields: {
    postJob
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});