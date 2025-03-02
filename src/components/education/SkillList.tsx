import React from "react";
import Skill from "./Skill";

const SkillList: React.FC<{ skills: Array<string> }> = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Skill key={skill + index}>{skill}</Skill>
      ))}
    </ul>
  );
};

export default SkillList;
