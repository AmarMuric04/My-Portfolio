import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const baseColor = "#697565";
const highlightColor = "#4a5568";

const ProjectItemSkeleton: React.FC = () => {
  return (
    <li className="my-4 theme-surface theme-primary-text transition-all p-3 rounded-lg shadow-xl relative">
      <div className="mb-4">
        <Skeleton
          height={30}
          width={200}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mb-4">
        <Skeleton
          height={20}
          width={100}
          inline={true}
          style={{ marginRight: "0.5rem" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={20}
          width={100}
          inline={true}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mb-4">
        <Skeleton
          count={3}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mb-4 flex gap-2">
        <Skeleton
          height={150}
          width={125}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={150}
          width={125}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <div>
            <Skeleton
              height={30}
              width={100}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
            <Skeleton
              height={30}
              width={100}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
          <div>
            <Skeleton
              height={30}
              width={100}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
            <Skeleton
              height={30}
              width={100}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
        </div>
        <Skeleton
          height={20}
          width={100}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
    </li>
  );
};

export default ProjectItemSkeleton;
