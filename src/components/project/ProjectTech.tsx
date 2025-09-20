import React from "react";

import { techSVGS } from "../../assets/projectTechs";
import { TechsType } from "../../types/tech";

interface ProjectTechProps {
  techs: TechsType;
}

const ProjectTech: React.FC<ProjectTechProps> = React.memo(({ techs }) => {
  return (
    <section className="flex flex-wrap gap-[1%] my-4">
      {Object.entries(techs).map(
        ([category, techList]: [string, Array<string>]) => {
          if (techList.length === 0) return null;

          return (
            <div
              className="flex-grow lg:flex-none p-2 rounded-xl w-[24.2%] min-w-[125px] min-h-[150px] transition-all"
              key={category}
            >
              <p className="mb-2 text-sm uppercase">
                {category}
              </p>
              <div className="flex flex-wrap items-center gap-4 max-w-full overflow-hidden">
                {techList.map((tech: string) => {
                  const Icon = techSVGS[tech];
                  return (
                    <div
                      className="flex flex-shrink-0 items-center gap-2 max-w-full overflow-hidden text-sm"
                      key={tech}
                    >
                      {Icon ? (
                        <Icon className="flex-shrink-0 w-6 h-6" />
                      ) : (
                        <span className="flex-shrink-0 w-6 h-6" />
                      )}
                      <span className="max-w-full overflow-hidden truncate text-ellipsis whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      )}
    </section>
  );
});

export default ProjectTech;
