import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import React from "react";

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
  classes: string;
}

const Toggle: React.FC<ToggleProps> = ({
  handleChange,
  isChecked,
  classes,
}) => {
  return (
    <>
      {/* @ts-expect-error Doesn't support React 19 so it will send errors. */}
      <Around
        className={`transition-all border-2 theme-surface-border shadow-md cursor-pointer place-items-center theme-background rounded-full ${classes}`}
        forceMotion
        toggle={handleChange}
        toggled={isChecked}
        duration={300}
      />
    </>
  );
};

export default Toggle;
