import React from "react";

const Skill: React.FC<{ key: string; children?: React.ReactNode }> = ({
  key,
  children,
}) => {
  return (
    <li className="bg-[#697565] px-2 py-1 rounded-md" key={key}>
      {children}
    </li>
  );
};

export default Skill;
