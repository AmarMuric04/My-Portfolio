import { TechsType } from "./tech";

export type ProjectType = {
  title: string;
  info?: string;
  type?: string;
  status: string;
  content: string;
  techs: TechsType;
  myThoughts: string;
  duration: string;
  keyFeatures: Array<string>;
  website?: string;
  github?: string;
  learningOutcomes?: string;
  contributions: string;
  deployment: string;
  accessibility: string;
  futurePlans: Array<string>;
  challenges: string;
};

export type SmallProjectType = {
  title: string;
  description: string;
  github: string;
};
