import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import React from "react";

import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

export const ToggleThemeButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <Around
      className={cn(
        "place-items-center shadow-md border-2 rounded-full transition-all cursor-pointer",
        className
      )}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      toggle={toggleTheme}
      toggled={isLight}
      duration={300}
      placeholder=""
      forceMotion
    />
  );
};
