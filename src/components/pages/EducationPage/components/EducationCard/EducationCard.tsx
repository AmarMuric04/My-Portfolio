import React from "react";

import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { useIntersectionObserver, useAnimatedNumber } from "@/hooks";
import { ProgressBar } from "@/components/atoms";

import { ProgressLabel } from "../ProgressLabel";

export const EducationCard: React.FC<IEducation> = ({
  progression,
  institution,
  teacher,
  skills,
  name,
  type,
}) => {
  const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
    rootMargin: "-150px",
    threshold: 0,
  });

  const currentProgression = useAnimatedNumber(
    wasInView ? progression : 0,
    600
  );

  const takeAway = progression > 90 ? 7 : 2;

  return (
    <li
      className="relative shadow-md backdrop-blur-sm my-4 p-3 borderrounded-lg overflow-hidden transition-all"
      ref={targetRef}
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="py-2 font-semibold text-lg transition-all">
              {name}
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p>{type}</p>
          <em className="block">
            at {institution} {teacher !== "N/A" && "by " + teacher}
          </em>
          <ProgressBar
            currentProgression={currentProgression}
            takeAway={takeAway}
          />

          <ProgressLabel type={type} />
        </CardContent>

        <CardFooter>
          <p className="my-4 font-semibold italic">Acquired Skills</p>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </li>
  );
};
