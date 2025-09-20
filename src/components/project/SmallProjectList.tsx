import ClassicExternalLink from "../buttons/ClassicExternalLink";
import { SmallProjectType } from "../../types/project";
import { otherProjects } from "../../assets/WORK";

const SmallProjectList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {otherProjects.map((project: SmallProjectType) => (
        <ClassicExternalLink
          key={project.title + project.description}
          description={project.description}
          title={project.title}
          href={project.github}
        />
      ))}
    </ul>
  );
};

export default SmallProjectList;
