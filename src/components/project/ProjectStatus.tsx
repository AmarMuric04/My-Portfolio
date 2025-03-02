import React from "react";
import { ArchiveSVG, DevelopmentSVG, LiveSVG } from "../../assets/svgs";
import StatusButton from "../buttons/StatusButton";

interface ProjectStatusProps {
  status: string;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => {
  return (
    <div className="flex mb-2">
      {status === "Live" && (
        <StatusButton color="#df2038" icon={LiveSVG} status={status} />
      )}
      {status === "Development" && (
        <StatusButton color="yellow" icon={DevelopmentSVG} status={status} />
      )}
      {status === "Archived" && (
        <StatusButton color="gray" icon={ArchiveSVG} status={status} />
      )}
    </div>
  );
};

export default ProjectStatus;
