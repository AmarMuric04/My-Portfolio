import React from "react";

interface ProjectStatusProps {
  status: string;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => {
  return (
    <div className="flex mb-2">
      {status === "Live" && (
        <StatusButton color="#df2038" status={status} icon={LiveSVG} />
      )}
      {status === "Development" && (
        <StatusButton icon={DevelopmentSVG} status={status} color="yellow" />
      )}
      {status === "Archived" && (
        <StatusButton icon={ArchiveSVG} status={status} color="gray" />
      )}
    </div>
  );
};

export default ProjectStatus;
