import useAnimatedNumber from "../../hooks/useAnimateNumber";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { EducationType } from "../../types/education";
import React from "react";

interface EducationProps {
  edu: EducationType;
}

const Education: React.FC<EducationProps> = ({ edu }) => {
  const { targetRef, wasInView } = useIntersectionObserver({
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
      className="bg-[#262825] p-3 rounded-lg shadow-xl relative my-4 overflow-hidden"
    >
      <h1 className="text-white font-semibold text-lg py-2">{edu.name}</h1>
      <p>{edu.type}</p>
      <em className="block">
        at {edu.institution} {edu.teacher !== "N/A" && "by " + edu.teacher}
      </em>
      <div
        className="mt-8 relative inline-flex w-auto"
        style={{
          left: `${currentProgression - takeAway}%`,
        }}
      >
        {currentProgression !== 100 ? (
          <p className="relative w-auto">
            {currentProgression}
            {currentProgression === edu.progression ? "%" : ""}
          </p>
        ) : (
          <p className="relative right-14 sm:right-10 w-auto">Completed</p>
        )}
      </div>

      <div className="h-[5px] w-full bg-[#2D2F2B]">
        <div
          className="h-full rounded-full bg-[#697565]"
          style={{
            width: `${currentProgression}%`,
          }}
        ></div>
      </div>
      {edu.type !== "Online Course" ? (
        <>
          <div className="flex justify-between w-full">
            <p>1st</p>
            <p>2nd</p>
            <p>3rd</p>
            <p>4th</p>
          </div>
          <div className="flex justify-between text-xs -mt-2 text-[#697565]">
            <p>year</p>
            <p>year</p>
            <p>year</p>
            <p>year</p>
          </div>
        </>
      ) : (
        <div className="flex justify-between w-full">
          <p>0%</p>
          <p>20%</p>
          <p>40%</p>
          <p>60%</p>
          <p>80%</p>
          <p>100%</p>
        </div>
      )}
      <p className="my-4 italic font-semibold">Acquired Skills</p>
      <ul className="flex flex-wrap gap-2">
        {edu.skills.map((skill) => (
          <li
            className="bg-[#697565] px-2 py-1 rounded-md"
            key={skill + edu.name}
          >
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Education;
