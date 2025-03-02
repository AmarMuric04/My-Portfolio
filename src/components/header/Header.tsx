import { useEffect, useState } from "react";
import {
  ContactSVG,
  EducationSVG,
  FolderSVG,
  HomeSVG,
} from "../../assets/svgs";
import NavBarItem from "./NavBarItem";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Toggle from "../ToggleTheme";

const NavBarText: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <p className="hidden sm:flex">{children}</p>;

const Header: React.FC<{
  changeTheme: () => void;
  isCorrectTheme: boolean;
}> = ({ changeTheme, isCorrectTheme }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="mb-28" ref={targetRef}>
        <nav
          className={`theme-surface select-none shadow-sm h-[3.5rem] top-4 transition-all rounded-full fixed z-50 left-1/2 -translate-x-1/2 pr-4 ${
            !isIntersecting ? "md:w-[30rem] w-[80%]" : "md:w-[40rem] w-[95%]"
          }`}
        >
          <ul className="flex w-full justify-between h-full items-center">
            <div className="flex gap-4 rounded-full h-full w-full sm:w-auto transition-all duration-300">
              <Toggle
                handleChange={changeTheme}
                isChecked={isCorrectTheme}
                classes="hidden sm:grid h-full w-[3.5rem]"
              />
              <NavBarItem to="/">
                <HomeSVG />
                <NavBarText>Home</NavBarText>
              </NavBarItem>
              <NavBarItem to="/projects">
                <FolderSVG />
                <NavBarText>Projects</NavBarText>
              </NavBarItem>
              <NavBarItem to="/education">
                <EducationSVG />
                <NavBarText>Education</NavBarText>
              </NavBarItem>
            </div>

            <a
              href="mailto:muricamar2004@gmail.com"
              className="hidden sm:flex items-center gap-2"
            >
              <ContactSVG />
              <p>Say Hi</p>
            </a>
          </ul>
        </nav>
      </header>
      <Toggle
        handleChange={changeTheme}
        isChecked={isCorrectTheme}
        classes={`sm:hidden fixed z-50 bottom-5 transition-all left-5 justify-center h-[3rem] w-[3rem]`}
      />
      <a
        href="mailto:muricamar2004@gmail.com"
        className={`sm:hidden theme-background theme-text-secondary fixed z-50 bottom-5 transition-all right-5 flex items-center justify-center h-[3rem] rounded-full gap-2 shadow-xl ${
          isVisible ? "w-[3rem]" : "w-[6rem] rounded-br-none"
        }`}
      >
        <ContactSVG />
        {!isVisible && <p className="flex-shrink-0">Say Hi</p>}
      </a>
    </>
  );
};

export default Header;
