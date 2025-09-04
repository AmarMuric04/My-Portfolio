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
import { ModalType } from "../../types/modal";
import { projectImages } from "../../assets/projectHighlights";

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
    <li className="relative bg-white/10 shadow-md p-3 border border-white/10 rounded-lg transition-all theme-surface theme-primary-text">
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

      <article ref={targetRef}>
        {wasInView && (
          <>
            {projectLogo ? (
              <img
                className="top-5 right-5 absolute opacity-50 rounded-lg w-[5rem] h-[5rem] object-contain"
                src={projectLogo}
                alt={`${project.title} logo`}
              />
            ) : (
              <></>
            )}
          </>
        )}

        <div className="flex flex-wrap items-center gap-x-2 mb-4 sm:mb-0 max-w-1/2 lg:max-w-4/5">
          <p className="py-2 font-semibold text-lg transition-all theme-title-text">
            {project.title}
          </p>
          {project.info && (
            <p className="px-1 theme-primary-text-border border-2 rounded-full theme-text-primary text-xs transition-all cursor-pointer">
              {project.info}
            </p>
          )}
          {project.type && (
            <p className="px-1 theme-primary-text-border border-2 rounded-full theme-text-primary text-xs transition-all cursor-pointer">
              {project.type}
            </p>
          )}
        </div>

        <ProjectStatus status={project.status} />

        <div className="relative flex flex-col items-start sm:max-w-4/5">
          <div
            className={`transition-all ${
              !isContentExpanded ? "line-clamp-3" : ""
            } pr-12`}
          >
            {project.content}
          </div>
          <button
            onClick={() => setIsContentExpanded(!isContentExpanded)}
            className="theme-text-primary hover:underline transition-all cursor-pointer theme-surface"
          >
            {isContentExpanded ? "show less" : "more...."}
          </button>
        </div>

        {project.techs && <ProjectTech techs={project.techs} />}

        <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-2 sm:gap-0 mt-1 w-full text-sm">
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
            <ul className="my-4 p-2 rounded-xl list-decimal theme-background">
              {project.keyFeatures.map((feature) => (
                <li className="ml-5" key={feature + project.title}>
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
                classes="py-1 w-1/2 sm:w-[8rem]"
                action={() => setHideHighlights(!hideHighlights)}
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
              classes="py-1 w-1/2 sm:w-[8rem]"
              action={() => toggleModal(ModalType.MY_THOUGHTS)}
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
            title={project.title}
            images={images}
            section={section}
            setSection={setSection}
            handleClick={handleClick}
          />
        )}

        <ActionButton
          action={() => toggleModal(ModalType.README)}
          classes="mt-4 float-right"
        >
          README.md
        </ActionButton>
      </article>
    </li>
  );
};

export default Project;
