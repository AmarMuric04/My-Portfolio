import { useEffect, useState } from "react";
import {
  ContactSVG,
  EducationSVG,
  FolderSVG,
  HomeSVG,
} from "../../assets/svgs";
import NavBarItem from "./NavBarItem";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Header = () => {
  const [selected, setSelected] = useState("/");
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
          className={`bg-[#262825] select-none shadow-sm h-[3.5rem] top-4 transition-all rounded-full fixed z-50 left-1/2 -translate-x-1/2 px-4 ${
            !isIntersecting ? "lg:w-[25rem] w-[80%]" : "lg:w-[40rem] w-[95%]"
          }`}
        >
          <ul className="flex w-full justify-between text-[#ccc] h-full items-center">
            <div className="flex gap-4 rounded-full h-full w-full sm:w-auto bg-[#262825] transition-all duration-300">
              <NavBarItem
                to="/"
                isSelected={selected === "/"}
                onClick={() => setSelected("/")}
              >
                <HomeSVG />
                <p className="hidden sm:flex">Home</p>
              </NavBarItem>
              <NavBarItem
                to="/projects"
                isSelected={selected === "/projects"}
                onClick={() => setSelected("/projects")}
              >
                <FolderSVG />
                <p className="hidden sm:flex">Projects</p>
              </NavBarItem>
              <NavBarItem
                to="/education"
                isSelected={selected === "/education"}
                onClick={() => setSelected("/education")}
              >
                <EducationSVG />
                <p className="hidden sm:flex">Education</p>
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

      {/* Floating Contact Button for Mobile */}
      <a
        href="mailto:muricamar2004@gmail.com"
        className={`sm:hidden bg-[#ECDFCC] text-[#1E201E] fixed z-50 bottom-5 transition-all right-5 flex items-center justify-center h-[3rem] rounded-full gap-2 shadow-xl ${
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
