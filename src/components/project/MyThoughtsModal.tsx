import React from "react";

import { ProjectType } from "../../types/project";

interface MyThoughtsModalType {
  project: ProjectType;
}

const MyThoughtsModal: React.FC<MyThoughtsModalType> = ({ project }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-start w-full">
      <div>
        <h1 className="mb-4 font-semibold text-lg">{project.title}</h1>
        <p className="xl:max-w-[80%]">{project.myThoughts}</p>
      </div>
      <img
        src={`/${project.title.toLowerCase().replace(" ", "")}-logo.png`}
        className="opacity-50 mb-8 w-[10rem] object-contain"
      />
    </div>
  );
};

export default MyThoughtsModal;
