import React from "react";

const Skill: React.FC<{ key: string; children?: React.ReactNode }> = ({
  key,
  children,
}) => {
  return (
    <li
      className="theme-secondary-background text-white transition-all px-2 py-1 rounded-md"
      key={key}
    >
      {children}
    </li>
  );
};

export default Skill;
