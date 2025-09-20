import { GraduationCap, Briefcase, Contact, Folder, Home } from "lucide-react";
import { useLocation, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ToggleThemeButton } from "@/components/atoms";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

const NavBarItem: React.FC<React.PropsWithChildren<{ to: string }>> = ({
  children,
  to,
}) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <motion.li
      className="relative flex justify-center sm:justify-start w-full sm:w-auto h-full"
      animate={{ opacity: isSelected ? 1 : 0.7 }}
      initial={false}
    >
      <Link
        aria-label={`Go to the ${to} page to learn more about me`}
        className="flex items-center gap-2"
        to={to}
      >
        {children}
      </Link>

      {isSelected && (
        <motion.div
          transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
          className="bottom-0 left-0 absolute w-full h-0.5"
          layoutId="underline"
        />
      )}
    </motion.li>
  );
};

export const Header: React.FC = () => {
  const { isIntersecting, targetRef } = useIntersectionObserver();

  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setIsVisible(true);
      } else setIsVisible(false);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <header className="mb-28" ref={targetRef}>
        <nav
          className={cn(
            "border shadow-mdselect-none h-[3.5rem] top-4 transition-all rounded-full fixed z-50 left-1/2 -translate-x-1/2 pr-4 overflow-hidden",
            {
              "md:w-[38rem] w-[80%]": !isIntersecting,
              "md:w-[45rem] w-[95%]": isIntersecting,
            }
          )}
        >
          <div className="flex justify-between items-center w-full h-full">
            <ul className="flex gap-4 rounded-full w-full sm:w-auto h-full transition-all duration-300">
              <ToggleThemeButton />

              <NavBarItem to="/">
                <Home />
                <p className="hidden sm:flex">Home</p>
              </NavBarItem>

              <NavBarItem to="/projects">
                <Folder />
                <p className="hidden sm:flex">Projects</p>
              </NavBarItem>

              <NavBarItem to="/education">
                <GraduationCap />
                <p className="hidden sm:flex">Education</p>
              </NavBarItem>

              <NavBarItem to="/experience">
                <Briefcase />
                <p className="hidden sm:flex">Experience</p>
              </NavBarItem>
            </ul>

            <button aria-label="Say hi through an email" id="contact">
              <a
                className="hidden sm:flex items-center gap-2"
                href="mailto:muricamar2004@gmail.com"
              >
                <Contact />
                <p>Say Hi</p>
              </a>
            </button>
          </div>
        </nav>
      </header>
      <ToggleThemeButton className="sm:hidden bottom-5 left-5 z-50 fixed flex justify-center items-center w-[4rem] h-[4rem] transition-all" />
      <a
        className={cn(
          "sm:hidden fixed z-50 bottom-5 transition-all right-5 flex items-center justify-center h-[3rem] rounded-full gap-2 shadow-xl",
          { "w-[6rem] rounded-br-none": !isVisible, "w-[3rem]": isVisible }
        )}
        href="mailto:muricamar2004@gmail.com"
      >
        <Contact />
        {!isVisible && <p className="flex-shrink-0">Say Hi</p>}
      </a>
    </>
  );
};
