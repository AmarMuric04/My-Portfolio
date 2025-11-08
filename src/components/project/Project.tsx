import { ExternalLink, ChevronDown, WholeWord, Plus } from "lucide-react";
import { useModal } from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";

import { WORK_HIGHLIGHTS } from "@/assets/WORK_HIGHLIGHTS";
import { WorkDetailsModal } from "@/components/organisms";
import { useIntersectionObserver } from "@/hooks";
import { GithubSVG } from "@/assets";
import { cn } from "@/lib/utils";

import ProjectTech from "./ProjectTech";
import Highlights from "./Highlights";
import { Button } from "../ui/button";

export const Project = ({ project }) => {
  const [hideHighlights, setHideHighlights] = useState<boolean>(true);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
  const [wasInView, setWasInView] = useState<boolean>(false);
  const { isIntersecting, targetRef } = useIntersectionObserver();
  const [section, setSection] = useState<number>(0);
  const images = WORK_HIGHLIGHTS[project.title.toLowerCase()];

  const { show: showWorkDetailsModal } = useModal(WorkDetailsModal);

  useEffect(() => {
    if (isIntersecting && !wasInView) {
      setWasInView(true);
    }
  }, [isIntersecting, wasInView]);

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
    <li ref={targetRef}>
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

      {project.status}

      <div className="relative flex flex-col items-start sm:max-w-4/5">
        <div
          className={cn("transition-all pr-12", {
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
          <Button
            onClick={() => setIsShowingFeatures(!isShowingFeatures)}
            className="py-1 w-1/2 sm:w-[8rem]"
          >
            <div
              className={`transition-all ${isShowingFeatures && "rotate-180"}`}
            >
              <ChevronDown />
            </div>
            <p>Features</p>
          </Button>
          <Button
            onClick={() => showWorkDetailsModal({ project })}
            className="py-1 w-1/2 sm:w-[8rem]"
          >
            <div className="transition-all">
              <Plus />
            </div>
            <p>More</p>
          </Button>
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
            <Button
              onClick={() => setHideHighlights(!hideHighlights)}
              className="py-1 w-1/2 sm:w-[8rem]"
            >
              <div>
                <div
                  className={`transition-all ${
                    !hideHighlights && "rotate-180"
                  }`}
                >
                  <ChevronDown />
                </div>
                <p>Highlights</p>
              </div>
            </Button>
          )}
          <Button
            onClick={() => toggleModal(ModalType.MY_THOUGHTS)}
            className="py-1 w-1/2 sm:w-[8rem]"
          >
            <div className="transition-all">
              <Plus />
            </div>
            <p>My Thoughts</p>
          </Button>
        </div>
        <div className="flex flex-shrink-0 justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
          {project.website && (
            <Button asChild>
              <div>
                <WholeWord />
                <a href={project.website}>Visit Website</a>
                <ExternalLink />
              </div>
            </Button>
          )}
          {project.github && (
            <Button asChild>
              <div>
                <GithubSVG />
                <a href={project.github}>Visit Website</a>
                <ExternalLink />
              </div>
            </Button>
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

      <Button
        onClick={() => toggleModal(ModalType.README)}
        className="float-right mt-4"
      >
        README.md
      </Button>
    </li>
  );
};
