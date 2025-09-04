import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface NavBarItemProps {
  to: string;
  children?: React.ReactNode;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ to, children }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <motion.li
      className="relative flex justify-center sm:justify-start w-full sm:w-auto h-full"
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0.7 }}
    >
      <Link
        aria-label={`Go to the ${to} page to learn more about me`}
        to={to}
        className="flex items-center gap-2"
      >
        {children}
      </Link>
      {isSelected && (
        <motion.div
          className="bottom-0 left-0 absolute w-full h-0.5 theme-primary-text-background"
          layoutId="underline"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.li>
  );
};

export default NavBarItem;
