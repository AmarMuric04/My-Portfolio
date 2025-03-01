import React from "react";
import { ProjectType } from "../../types/project";

interface MyThoughtsModalType {
  project: ProjectType;
}

const MyThoughtsModal: React.FC<MyThoughtsModalType> = ({ project }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start w-full">
      <div>
        <h1 className="text-white font-semibold text-lg mb-4">
          {project.title}
        </h1>
        <p className="xl:max-w-[80%]">{project.myThoughts}</p>
      </div>
      <img
        className="w-[10rem] object-contain opacity-50 mb-8"
        src={`/${project.title.toLowerCase().replace(" ", "")}-logo.png`}
      />
    </div>
  );
};

export default MyThoughtsModal;
