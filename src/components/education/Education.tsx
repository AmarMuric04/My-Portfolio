import useAnimatedNumber from "../../hooks/useAnimateNumber";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { EducationType } from "../../types/education";
import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressLabel from "./ProgressLabels";
import SkillList from "./SkillList";

interface EducationProps {
  edu: EducationType;
}

const Education: React.FC<EducationProps> = ({ edu }) => {
  const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
    threshold: 0,
    rootMargin: "-150px",
  });
  const currentProgression = useAnimatedNumber(
    wasInView ? edu.progression : 0,
    600
  );

  const takeAway = edu.progression > 90 ? 7 : 2;

  return (
    <li
      ref={targetRef}
      className="theme-surface transition-all  p-3 rounded-lg shadow-xl relative my-4 overflow-hidden"
    >
      <article>
        <h1 className="transition-all theme-title-text font-semibold text-lg py-2">
          {edu.name}
        </h1>
        <p>{edu.type}</p>
        <em className="block">
          at {edu.institution} {edu.teacher !== "N/A" && "by " + edu.teacher}
        </em>
        <ProgressBar
          currentProgression={currentProgression}
          takeAway={takeAway}
        />
        <ProgressLabel type={edu.type} />

        <p className="my-4 italic font-semibold">Acquired Skills</p>
        <SkillList skills={edu.skills} />
      </article>
    </li>
  );
};

export default Education;
