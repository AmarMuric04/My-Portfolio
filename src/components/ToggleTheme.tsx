import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import React from "react";

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <button
      onClick={handleChange}
      className="transition-all border-2 theme-surface-border shadow-md cursor-pointer h-full w-[3.5rem] grid place-items-center theme-background rounded-full"
    >
      <div className="scale-125 mt-1">
        {/* @ts-expect-error Doesn't support React 19 so it will send errors. */}
        <Around forceMotion toggled={isChecked} duration={300} />
      </div>
    </button>
  );
};

export default Toggle;
