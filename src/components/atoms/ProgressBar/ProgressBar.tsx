import React from "react";

import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentProgression: number;
  takeAway: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgression,
  takeAway,
}) => {
  return (
    <div>
      <div
        style={{
          left: `${currentProgression - takeAway}%`,
        }}
        className="inline-flex relative mt-8 w-auto"
      >
        {currentProgression !== 100 ? (
          <p className="relative w-auto">
            {currentProgression}
            {currentProgression === currentProgression ? "%" : ""}
          </p>
        ) : (
          <p className="right-14 sm:right-10 relative w-auto">Completed</p>
        )}
      </div>

      <Progress value={currentProgression} />
    </div>
  );
};
