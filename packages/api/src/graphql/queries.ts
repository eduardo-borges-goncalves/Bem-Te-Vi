import { GraphQLList } from "graphql";
import { JobType } from "./types";

const jobsArray = [
  {
    id: "1",
    jobOffer: "Desenvolvedor Front-End",
    company: "Rocketseat",
    interview: true,
    technicalChallenge: true,
    appliedAt: "2020-01-01",
    state: "Em processo",
    recusedReason: "",
  },
  {
    id: "1",
    jobOffer: "Desenvolvedor Front-End",
    company: "Rocketseat",
    interview: true,
    technicalChallenge: true,
    appliedAt: "2020-01-01",
    state: "Em processo",
    recusedReason: "",
  },
  {
    id: "1",
    jobOffer: "Desenvolvedor Front-End",
    company: "Rocketseat",
    interview: true,
    technicalChallenge: true,
    appliedAt: "2020-01-01",
    state: "Aprovado",
    recusedReason: "",
  },
]

export const jobs = {
  type: new GraphQLList(JobType),
  description: "List of jobs",
  resolve: () => {
    return jobsArray; // teste de retorno de dados
  }
};