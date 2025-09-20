interface IProject {
  keyFeatures: Array<string>;
  futurePlans: Array<string>;
  learningOutcomes?: string;
  contributions: string;
  accessibility: string;
  userFeedback: string;
  myThoughts: string;
  deployment: string;
  challenges: string;
  duration: string;
  website?: string;
  content: string;
  github?: string;
  status: string;
  techs: ITechs;
  title: string;
  info?: string;
  type?: string;
}

interface IEducation {
  progression: number;
  institution: string;
  skills: string[];
  teacher: string;
  type: string;
  name: string;
}

interface ISmallProject {
  description: string;
  github: string;
  title: string;
}

interface IImage {
  description: string;
  image: string;
}

interface ITech {
  [key: string]: React.ElementType;
}

interface ITechs {
  [key: string]: Array<string>;
}
