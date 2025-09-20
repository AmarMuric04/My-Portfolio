import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import {
  MiniArrowDownSVG,
  GithubSVG,
  WorldSVG,
  PlusSVG,
} from "../../assets/svgs";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ExternalLinkButton from "../buttons/ExternalLinkButton";
import { projectImages } from "../../assets/WORK_HIGHLIGHTS";
import { projectREADMEs } from "../../assets/WORK_READMES";
import ActionButton from "../buttons/ActionButton";
import { ProjectType } from "../../types/project";
import MyThoughtsModal from "./MyThoughtsModal";
import { ModalType } from "../../types/modal";
import ProjectStatus from "./ProjectStatus";
import ProjectTech from "./ProjectTech";
import Highlights from "./Highlights";
import MoreModal from "./MoreModal";
import Modal from "../modal/Modal";
import { cx } from "../../utility";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [hideHighlights, setHideHighlights] = useState<boolean>(true);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
  const [wasInView, setWasInView] = useState<boolean>(false);
  const [openedModal, setOpenedModal] = useState<Array<ModalType>>([]);
  const { isIntersecting, targetRef } = useIntersectionObserver();
  const [section, setSection] = useState<number>(0);
  const images = projectImages[project.title.toLowerCase()];

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
      case ModalType.MY_THOUGHTS:
        return <MyThoughtsModal project={project} />;
      case ModalType.README:
        return <ReactMarkdown>{projectREADMEs[project.title]}</ReactMarkdown>;
      case ModalType.MORE:
        return (
          <MoreModal
            setOpenedModal={setOpenedModal}
            openedModal={openedModal}
            project={project}
          />
        );
      default:
        return null;
    }
  };

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSection((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSection((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const projectLogo =
    "/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

  return (
    <li className="relative bg-white/10 shadow-md p-3 border border-white/10 rounded-lg transition-all">
      {Object.values(ModalType).map((modal) => (
        <Modal
          title={
            modal === ModalType.README
              ? "README.md"
              : modal === ModalType.MORE
                ? "More Information"
                : "My Thoughts on this project"
          }
          setIsOpen={() => toggleModal(modal)}
          open={openedModal}
          key={modal}
          id={modal}
        >
          {renderModalContent(modal)}
        </Modal>
      ))}

      <article ref={targetRef}>
        {wasInView && (
          <>
            {projectLogo ? (
              <img
                className="top-5 right-5 absolute opacity-50 rounded-lg w-[5rem] h-[5rem] object-contain"
                alt={`${project.title} logo`}
                src={projectLogo}
              />
            ) : (
              <></>
            )}
          </>
        )}

        <div className="flex flex-wrap items-center gap-x-2 mb-4 sm:mb-0 max-w-1/2 lg:max-w-4/5">
          <p className="py-2 font-semibold text-lg transition-all">
            {project.title}
          </p>
          {project.info && (
            <p className="px-1 border-2 rounded-full text-xs transition-all cursor-pointer">
              {project.info}
            </p>
          )}
          {project.type && (
            <p className="px-1 border-2 rounded-full text-xs transition-all cursor-pointer">
              {project.type}
            </p>
          )}
        </div>

        <ProjectStatus status={project.status} />

        <div className="relative flex flex-col items-start sm:max-w-4/5">
          <div
            className={cx("transition-all pr-12", {
              "line-clamp-3": !isContentExpanded,
            })}
          >
            {project.content}
          </div>
          <button
            className="hover:underline transition-all cursor-pointer"
            onClick={() => setIsContentExpanded(!isContentExpanded)}
          >
            {isContentExpanded ? "show less" : "more...."}
          </button>
        </div>

        {project.techs && <ProjectTech techs={project.techs} />}

        <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-2 sm:gap-0 mt-1 w-full text-sm">
          <div className="flex gap-1 w-full">
            <ActionButton
              onClick={() => setIsShowingFeatures(!isShowingFeatures)}
              className="py-1 w-1/2 sm:w-[8rem]"
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
              onClick={() => toggleModal(ModalType.MORE)}
              className="py-1 w-1/2 sm:w-[8rem]"
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>More</p>
            </ActionButton>
          </div>
          <p
            className="flex-shrink-0 text-xs select-none"
            aria-label="Duration"
            title="Duration"
          >
            {project.duration}
          </p>
        </div>

        {isShowingFeatures && (
          <div>
            <ul className="my-4 p-2 rounded-xl list-decimal">
              {project.keyFeatures.map((feature) => (
                <li key={feature + project.title} className="ml-5">
                  <pre>{feature}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-0 mt-1 w-full text-sm">
          <div className="flex gap-1 w-full sm:w-auto">
            {images?.length && (
              <ActionButton
                onClick={() => setHideHighlights(!hideHighlights)}
                className="py-1 w-1/2 sm:w-[8rem]"
              >
                <div
                  className={`transition-all ${
                    !hideHighlights && "rotate-180"
                  }`}
                >
                  <MiniArrowDownSVG />
                </div>
                <p>Highlights</p>
              </ActionButton>
            )}
            <ActionButton
              onClick={() => toggleModal(ModalType.MY_THOUGHTS)}
              className="py-1 w-1/2 sm:w-[8rem]"
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>My Thoughts</p>
            </ActionButton>
          </div>
          <div className="flex flex-shrink-0 justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
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

        {!hideHighlights && (
          <Highlights
            handleClick={handleClick}
            setSection={setSection}
            title={project.title}
            section={section}
            images={images}
          />
        )}

        <ActionButton
          onClick={() => toggleModal(ModalType.README)}
          className="float-right mt-4"
        >
          README.md
        </ActionButton>
      </article>
    </li>
  );
};

export default Project;
