import React from "react";
import ActionButton from "../buttons/ActionButton";
import { MiniArrowDownSVG } from "../../assets/svgs";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface HighlightsProps {
  title: string;
  images: Array<{ image: string; description: string }>;
  section: number;
  setSection: (index: number) => void;
  handleClick: (direction: "prev" | "next") => void;
}

const Highlights: React.FC<HighlightsProps> = ({
  title,
  images,
  section,
  setSection,
  handleClick,
}) => {
  const { targetRef, wasInView } = useIntersectionObserver();

  return (
    <section
      ref={targetRef}
      className="mt-4"
      aria-labelledby="highlights-heading"
    >
      <h2 id="highlights-heading" className="sr-only">
        {title} Highlights
      </h2>
      <div className="flex items-center justify-between">
        <ul className="flex gap-1 my-4 text-xs items-center" role="list">
          {images.map((image, index) => {
            const isSelected = index === section;
            return (
              <button
                onClick={() => setSection(index)}
                key={image.image + "dot"}
                className={`p-1.25 rounded-full cursor-pointer relative ${
                  isSelected ? "bg-[#697565]" : "bg-[#53594E]"
                }`}
                aria-pressed={isSelected}
                aria-label={`Select ${image.description}`}
              >
                {isSelected && (
                  <span className="relative z-50">{image.description}</span>
                )}
              </button>
            );
          })}
        </ul>

        <div className="flex gap-1">
          <ActionButton
            action={() => handleClick("prev")}
            aria-label="Previous"
          >
            <div className="rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
          <ActionButton action={() => handleClick("next")} aria-label="Next">
            <div className="-rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
        </div>
      </div>
      {images.map((image, index) => {
        if (index === section) {
          return (
            <React.Fragment key={image.image + "image"}>
              {wasInView && (
                <img
                  className="rounded-lg lg:min-h-[21rem] showAnimation"
                  src={image.image}
                  alt={image.description}
                  style={{ opacity: 1, transition: "opacity 0.6s" }}
                />
              )}
            </React.Fragment>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Highlights;
