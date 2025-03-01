import { otherProjects } from "../../assets/projects";
import { SmallProjectType } from "../../types/project";
import ClassicExternalLink from "../buttons/ClassicExternalLink";

const SmallProjectList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {otherProjects.map((project: SmallProjectType) => (
        <ClassicExternalLink
          title={project.title}
          description={project.description}
          href={project.github}
          key={project.title + project.description}
        />
      ))}
    </ul>
  );
};

export default SmallProjectList;
