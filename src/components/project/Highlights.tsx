import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

import { MiniArrowDownSVG } from "../../assets/svgs";
import ActionButton from "../buttons/ActionButton";
import { ImageType } from "../../types/image";

interface HighlightsProps {
  handleClick: (direction: "prev" | "next") => void;
  setSection: (index: number) => void;
  images: Array<ImageType>;
  section: number;
  title: string;
}

const Highlights: React.FC<HighlightsProps> = ({
  handleClick,
  setSection,
  section,
  images,
  title,
}) => {
  return (
    <section aria-labelledby="highlights-heading" className="mt-4">
      <h2 id="highlights-heading" className="sr-only">
        {title} Highlights
      </h2>
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-1 my-4 text-xs" role="list">
          {images.map((image, index) => {
            const isSelected = index === section;
            return (
              <button
                className="relative p-1.25 rounded-full cursor-pointer"
                aria-label={`Select ${image.description}`}
                onClick={() => setSection(index)}
                key={image.image + "dot"}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <span className="z-50 relative">{image.description}</span>
                )}
              </button>
            );
          })}
        </ul>

        <div className="flex gap-1">
          <ActionButton
            onClick={() => handleClick("prev")}
            aria-label="Previous"
          >
            <div className="rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
          <ActionButton onClick={() => handleClick("next")} aria-label="Next">
            <div className="-rotate-90">
              <MiniArrowDownSVG />
            </div>
          </ActionButton>
        </div>
      </div>
      {images.map((image, index) => {
        if (index === section) {
          return (
            <picture key={image.image + "image"}>
              <source srcSet={image.image} type="image/webp" />
              <LazyLoadImage
                className="rounded-lg lg:min-h-[21rem] showAnimation"
                key={image.image + "image"}
                alt={image.description}
                src={image.image}
                visibleByDefault
                effect="blur"
              />
            </picture>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Highlights;
