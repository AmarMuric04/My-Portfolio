import React, { useEffect, useState } from "react";
import {
  GithubSVG,
  MiniArrowDownSVG,
  PlusSVG,
  WorldSVG,
} from "../../assets/svgs";
import Highlights from "./Highlights";
import ActionButton from "../buttons/ActionButton";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Modal from "../modal/Modal";
import ProjectStatus from "./ProjectStatus";
import ProjectTech from "./ProjectTech";
import ReactMarkdown from "react-markdown";
import { projectREADMEs } from "../../assets/projectREADMEs";
import MoreModal from "./MoreModal";
import MyThoughtsModal from "./MyThoughtsModal";
import { ProjectType } from "../../types/project";
import { ModalType } from "../../types/moda";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [hideHighlights, setHideHighlights] = useState<boolean>(true);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
  const [wasInView, setWasInView] = useState<boolean>(false);
  const [openedModal, setOpenedModal] = useState<Array<ModalType>>([]);
  const { targetRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting && !wasInView) {
      setWasInView(true);
    }
  }, [isIntersecting, wasInView]);

  const toggleModal = (modal: ModalType) => {
    setOpenedModal((prev) =>
      prev.includes(modal) ? prev.filter((m) => m !== modal) : [...prev, modal]
    );
  };

  const renderModalContent = (modal: ModalType) => {
    switch (modal) {
      case ModalType.README:
        return <ReactMarkdown>{projectREADMEs[project.title]}</ReactMarkdown>;
      case ModalType.MORE:
        return (
          <MoreModal
            project={project}
            openedModal={openedModal}
            setOpenedModal={setOpenedModal}
          />
        );
      case ModalType.MY_THOUGHTS:
        return <MyThoughtsModal project={project} />;
      default:
        return null;
    }
  };

  return (
    <>
      {Object.values(ModalType).map((modal) => (
        <Modal
          key={modal}
          open={openedModal}
          setIsOpen={() => toggleModal(modal)}
          id={modal}
          title={
            modal === ModalType.README
              ? "README.md"
              : modal === ModalType.MORE
              ? "More Information"
              : "My Thoughts on this project"
          }
        >
          {renderModalContent(modal)}
        </Modal>
      ))}

      <section
        ref={targetRef}
        className="bg-[#262825] p-3 rounded-lg shadow-xl relative"
      >
        {wasInView && (
          <img
            className="w-[5rem] h-[5rem] rounded-lg object-contain absolute opacity-50 right-5 top-5"
            src={`/${project.title.replace(" ", "").toLowerCase()}-logo.png`}
            alt={`${project.title} logo`}
          />
        )}

        <div className="flex gap-x-2 items-center flex-wrap max-w-1/2 lg:max-w-4/5 mb-4 sm:mb-0">
          <p className="text-white font-semibold text-lg py-2">
            {project.title}
          </p>
          {project.info && (
            <p className="bg-[#ECDFCC20] cursor-pointer border-2 border-[#ECDFCC] text-xs px-1 text-[#ECDFCC] rounded-full">
              {project.info}
            </p>
          )}
          {project.type && (
            <p className="bg-[#ECDFCC20] cursor-pointer border-2 border-[#ECDFCC] text-xs px-1 text-[#ECDFCC] rounded-full">
              {project.type}
            </p>
          )}
        </div>

        <ProjectStatus status={project.status} />

        <div className="relative sm:max-w-4/5 flex flex-col items-start">
          <div
            className={`transition-all ${
              !isContentExpanded ? "line-clamp-3" : ""
            } pr-12`}
          >
            {project.content}
          </div>
          <button
            onClick={() => setIsContentExpanded(!isContentExpanded)}
            className="text-[#ECDFCC] hover:underline cursor-pointer bg-[#262825]"
          >
            {isContentExpanded ? "show less" : "more...."}
          </button>
        </div>

        {project.techs && <ProjectTech techs={project.techs} />}

        <div className="flex justify-between w-full items-center text-sm mt-1 flex-col-reverse sm:flex-row">
          <div className="flex gap-1 w-full">
            <ActionButton
              classes="py-1 w-1/2 sm:w-[8rem]"
              action={() => setIsShowingFeatures(!isShowingFeatures)}
            >
              <div
                className={`transition-all ${
                  isShowingFeatures && "rotate-180"
                }`}
              >
                <MiniArrowDownSVG />
              </div>
              <p>Features</p>
            </ActionButton>
            <ActionButton
              classes="py-1 w-1/2 sm:w-[8rem]"
              action={() => toggleModal(ModalType.MORE)}
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>More</p>
            </ActionButton>
          </div>
          <p className="text-xs flex-shrink-0">{project.duration}</p>
        </div>

        {isShowingFeatures && (
          <div>
            <ul className="bg-[#1E201E] p-2 rounded-xl my-4 list-decimal">
              {project.keyFeatures.map((feature) => (
                <li className="ml-5" key={feature + project.title}>
                  <pre>{feature}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between w-full items-center text-sm mt-1 flex-wrap">
          <div className="flex gap-1 w-full sm:w-auto">
            <ActionButton
              classes="py-1 w-1/2 sm:w-[8rem]"
              action={() => setHideHighlights(!hideHighlights)}
            >
              <div
                className={`transition-all ${!hideHighlights && "rotate-180"}`}
              >
                <MiniArrowDownSVG />
              </div>
              <p>Highlights</p>
            </ActionButton>
            <ActionButton
              classes="py-1 w-1/2 sm:w-[8rem]"
              action={() => toggleModal(ModalType.MY_THOUGHTS)}
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>My Thoughts</p>
            </ActionButton>
          </div>
          <div className="flex gap-4 items-center flex-shrink-0 justify-center w-full sm:w-auto sm:justify-start">
            {project.website && (
              <ExternalLinkButton href={project.website} icon={WorldSVG}>
                Visit Website
              </ExternalLinkButton>
            )}
            {project.github && (
              <ExternalLinkButton href={project.github} icon={GithubSVG}>
                Visit Github
              </ExternalLinkButton>
            )}
          </div>
        </div>

        {!hideHighlights && <Highlights title={project.title} />}

        <ActionButton
          action={() => toggleModal(ModalType.README)}
          classes="mt-4 float-right"
        >
          README.md
        </ActionButton>
      </section>
    </>
  );
};

export default Project;
