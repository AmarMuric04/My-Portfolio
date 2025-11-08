import { LazyLoadImage } from "react-lazy-load-image-component";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

import { TooltipContent, TooltipTrigger, Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";

interface HighlightsProps {
  handleClick: (direction: "prev" | "next") => void;
  setSection: (index: number) => void;
  images: Array<any>;
  section: number;
  title: string;
}

export const Highlights: React.FC<HighlightsProps> = ({
  handleClick,
  setSection,
  section,
  images,
  title,
}) => {
  return (
    <section aria-labelledby="highlights-heading">
      <h2 id="highlights-heading" className="sr-only">
        {title} Highlights
      </h2>

      {/* Image Display */}
      {images.map((image, index) => {
        if (index === section) {
          return (
            <picture key={image.image + "image"}>
              <source srcSet={image.image} type="image/webp" />
              <LazyLoadImage
                className="rounded-lg w-full object-cover shadow-md mb-3 animate-in fade-in duration-300"
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

      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {images.map((image, index) => {
            const isSelected = index === section;
            return (
              <Tooltip key={image.image + "dot"}>
                <TooltipTrigger asChild>
                  <button
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to image ${index + 1}: ${image.description}`}
                    onClick={() => setSection(index)}
                    aria-pressed={isSelected}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{image.description}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => handleClick("prev")}
                aria-label="Previous image"
                className="h-8 w-8 p-0"
                variant="ghost"
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Previous</p>
            </TooltipContent>
          </Tooltip>

          <span className="text-xs text-muted-foreground mx-1">
            {section + 1} / {images.length}
          </span>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => handleClick("next")}
                aria-label="Next image"
                className="h-8 w-8 p-0"
                variant="ghost"
                size="sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Next</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
