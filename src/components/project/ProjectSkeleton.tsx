import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const baseColor = "#697565";
const highlightColor = "#4a5568";

const ProjectItemSkeleton: React.FC = () => {
  return (
    <li className="relative bg-white/10 shadow-md p-3 border border-white/10 rounded-lg transition-all list-none theme-surface theme-primary-text">
      <div className="mb-2">
        <Skeleton
          height={30}
          width={200}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mb-2">
        <Skeleton
          height={24}
          width={65}
          inline={true}
          style={{ marginRight: "0.5rem", borderRadius: "48px" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mb-4 w-1/2">
        <Skeleton
          count={3}
          height={16}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={16}
          width={70}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="flex gap-2 mb-4">
        <Skeleton
          height={180}
          width={148}
          style={{ borderRadius: "12px" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={180}
          width={148}
          style={{ borderRadius: "12px" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={180}
          width={148}
          style={{ borderRadius: "12px" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          height={180}
          width={148}
          style={{ borderRadius: "12px" }}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <div>
        <div className="flex gap-1">
          <div>
            <Skeleton
              height={27.5}
              width={125}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
            <Skeleton
              height={27.5}
              width={125}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
          <div>
            <Skeleton
              height={27.5}
              width={125}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
        </div>
        <div className="float-right">
          <Skeleton
            height={27.5}
            width={125}
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </div>
      </div>
    </li>
  );
};

export default ProjectItemSkeleton;
