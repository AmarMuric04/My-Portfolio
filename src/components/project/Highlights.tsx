import React, { useEffect, useState } from "react";
import { projectImages } from "../../assets/projectHighlights";
import { MiniArrowDownSVG } from "../../assets/svgs";
import ActionButton from "../buttons/ActionButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ImageType } from "../../types/image";

interface HighlightsProps {
  title: string;
}

const Highlights: React.FC<HighlightsProps> = ({ title }) => {
  const images: Array<ImageType> = projectImages[title.toLowerCase()];
  const [section, setSection] = useState(0);
  const [wasInView, setWasInView] = useState(false);
  const { targetRef, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting && !wasInView) setWasInView(true);
  }, [isIntersecting, wasInView]);

  if (!images) return null;

  const handleClick = (direction: string) => {
    setSection((prev) => {
      if (direction === "prev") {
        return (prev - 1 + images.length) % images.length;
      } else if (direction === "next") {
        return (prev + 1) % images.length;
      }
      return prev;
    });
  };

  return (
    <section ref={targetRef} className="mt-4">
      <div className="flex items-center justify-between">
        <ul className="flex gap-1 my-4 text-xs items-center">
          {images.map((image, index) => {
            const isSelected = index === section;
            return (
              <button
                onClick={() => setSection(index)}
                key={image.image + "dot"}
                className={`p-1.25 rounded-full cursor-pointer relative ${
                  isSelected ? "bg-[#697565]" : "bg-[#53594E]"
                }`}
              >
                {isSelected && (
                  <span className="relative z-50">{image.description}</span>
                )}
              </button>
            );
          })}
        </ul>

        <div className="flex gap-1">
          <ActionButton action={() => handleClick("prev")}>
            <div className="rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
          <ActionButton action={() => handleClick("next")}>
            <div className="-rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
        </div>
      </div>
      {images.map((image, index) => {
        if (index === section) {
          return (
            <>
              {wasInView && (
                <img
                  key={image.image + "image"}
                  className="rounded-lg lg:min-h-[21rem] showAnimation"
                  src={image.image}
                  alt={image.description}
                  style={{ opacity: 1, transition: "opacity 0.6s" }}
                />
              )}
            </>
          );
        }
      })}
    </section>
  );
};

export default Highlights;
