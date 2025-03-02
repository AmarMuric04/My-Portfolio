import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import useLocalStorage from "use-local-storage";

const Root = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isLight, setIsLight] = useLocalStorage("isLight", preference);

  return (
    <main
      data-theme={isLight ? "light" : "dark"}
      className="transition-all theme-background min-h-screen pb-32"
    >
      <main className="w-full flex justify-center theme-container-text transition-all">
        <div className="lg:w-[40rem] w-[95%]">
          <Header
            changeTheme={() => setIsLight(!isLight)}
            isCorrectTheme={isLight}
          />
          <Outlet />
        </div>
      </main>
    </main>
  );
};

export default Root;
