import { useEffect, useState } from "react";

type ThemeType = "light" | "dark";

const getPreferedTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => getPreferedTheme());

  useEffect(() => {
    document.body.classList.remove("light", "dark");

    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }

    if (theme === "light") {
      setTheme("dark");
    }
  };

  const isDark = theme === "dark";
  const isLight = theme === "light";

  return { toggleTheme, isLight, isDark, theme };
};
