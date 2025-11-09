import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

import { useTheme } from "@/hooks";

export const ToggleThemeButton = () => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <Around
      className="h-16 !ring-inset !ring !ring-border shadow-md !bg-background rounded-full aspect-square grid place-items-center"
      onPointerLeaveCapture={() => {}}
      onPointerEnterCapture={() => {}}
      toggle={toggleTheme}
      toggled={isLight}
      duration={300}
      placeholder=""
      forceMotion
    />
  );
};
