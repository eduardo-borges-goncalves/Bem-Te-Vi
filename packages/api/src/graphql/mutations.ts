import { GraphQLBoolean, GraphQLString } from "graphql";
import { JobType } from "./types";

export const postJob = {
  type: JobType,
  description: "Create a new job",
  args: {
    jobOffer: { type: GraphQLString}, 
    company: { type: GraphQLString},
    interview: { type: GraphQLBoolean},
    technicalChallenge: { type: GraphQLBoolean},
    appliedAt: { type: GraphQLString},
    state: { type: GraphQLString},
    recusedReason: { type: GraphQLString},
  }, 
  resolve() {
    return "cadastrar nova vaga de emprego aplicada";
  }
}