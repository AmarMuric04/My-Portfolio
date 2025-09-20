import { SetStateAction, Dispatch } from "react";
import React from "react";

import { GithubSVG, WorldSVG } from "../../assets/svgs";
import ActionButton from "../buttons/ActionButton";
import { ProjectType } from "../../types/project";
import { ModalType } from "../../types/modal";
import ProjectStatus from "./ProjectStatus";
import ProjectTech from "./ProjectTech";

interface MoreModalProps {
  setOpenedModal: Dispatch<SetStateAction<Array<ModalType>>>;
  openedModal: Array<ModalType>;
  project: ProjectType;
}

const MoreModal: React.FC<MoreModalProps> = ({
  setOpenedModal,
  openedModal,
  project,
}) => {
  if (!project) throw new Error("A project is required to use this modal");

  return (
    <>
      <section className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="font-semibold text-lg">{project.title}</h1>
        <div className="flex gap-4">
          <ProjectStatus status={project.status} />
          {project.github && (
            <a href={project.github} target="_blank">
              <GithubSVG />
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank">
              <WorldSVG />
            </a>
          )}
        </div>
      </section>
      <section className="flex flex-col items-start xl:w-2/3">
        <strong>Description</strong>
        <em>
          {'"'}
          {project.content}
          {'"'}
        </em>
        <ActionButton
          onClick={() =>
            setOpenedModal([...openedModal, ModalType.MY_THOUGHTS])
          }
          className="my-4 px-3"
        >
          My thoughts on this project
        </ActionButton>
        <strong>Duration</strong>
        <p className="mb-4">{project.duration}</p>
        <strong>Challenge I overcame during this project</strong>
        <p className="mb-4">{project.challenges}</p>
        <strong>Key features of this project</strong>
        <ol className="mb-4">
          {project.keyFeatures.map((feature, index) => (
            <li key={feature + project.title}>
              <pre className="whitespace-pre-wrap">
                {index + 1}. {feature}
              </pre>
            </li>
          ))}
        </ol>
        <strong>
          Things I{"'"}ve considered adding to the project in the future
        </strong>
        <ol className="mb-4">
          {project.futurePlans.map((plan, index) => (
            <li key={plan + project.title}>
              <pre className="whitespace-pre-wrap">
                {index + 1}. {plan}
              </pre>
            </li>
          ))}
        </ol>
        <strong>My contribution to the project</strong>
        <p className="mb-4">{project.contributions}</p>
        <strong>Key thing I learned during this project</strong>
        <p className="mb-4">{project.learningOutcomes}</p>
        <strong>How I chose to deploy this project</strong>
        <p className="mb-4">{project.deployment}</p>
        <strong>Accessibility</strong>
        <p className="mb-4">{project.accessibility}</p>
        <strong>Technologies used</strong>
        <ProjectTech techs={project.techs} />
      </section>
    </>
  );
};

export default MoreModal;
