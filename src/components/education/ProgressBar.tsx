import React from "react";

interface ProgressBarProps {
  currentProgression: number;
  takeAway: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgression,
  takeAway,
}) => {
  return (
    <div>
      <div
        className="mt-8 relative inline-flex w-auto"
        style={{
          left: `${currentProgression - takeAway}%`,
        }}
      >
        {currentProgression !== 100 ? (
          <p className="relative w-auto">
            {currentProgression}
            {currentProgression === currentProgression ? "%" : ""}
          </p>
        ) : (
          <p className="relative right-14 sm:right-10 w-auto">Completed</p>
        )}
      </div>

      <div className="h-[5px] w-full theme-surface-alt transition-all">
        <div
          className="h-full rounded-full theme-secondary-background"
          style={{
            width: `${currentProgression}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
