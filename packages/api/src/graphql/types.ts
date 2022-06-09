import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const JobType = new GraphQLObjectType({
  name: "Job",
  description: "Job offer",
  fields: () => ({
    id: { type: GraphQLID },
    jobOffer: { type: GraphQLString },
    company: { type: GraphQLString },
    interview: { type: GraphQLBoolean },
    technicalChallenge: { type: GraphQLBoolean },
    appliedAt: { type: GraphQLString },
    approved: { type: GraphQLBoolean },
    recusedReason: { type: GraphQLString },
  }),
});