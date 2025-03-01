import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface NavBarItemProps {
  to: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <motion.li
      className="relative flex h-full w-full sm:w-auto justify-center sm:justify-start"
      onClick={onClick}
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0.7 }}
    >
      <Link to={to} className="flex items-center gap-2">
        {children}
      </Link>
      {isSelected && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ECDFCC]"
          layoutId="underline"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.li>
  );
};

export default NavBarItem;
