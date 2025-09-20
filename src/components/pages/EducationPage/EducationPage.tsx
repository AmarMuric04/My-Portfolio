import { PageSection } from "@/components/molecules";
import { education } from "@/assets/EDUCATION";

import { EducationCard, PageHeader, Helmet } from "./components";

export const EducationPage = () => {
  return (
    <>
      <Helmet />

      <PageSection>
        <PageHeader />
      </PageSection>

      <PageSection>
        <ul>
          {education.map((education) => (
            <EducationCard {...education} />
          ))}
        </ul>
      </PageSection>

      <p className="my-4 text-lg">
        But my education doesn’t stop there. Beyond formal courses, I’ve
        immersed myself in an uncountable amount of content related to
        programming, software development, and personal growth. From in-depth
        tutorials and technical deep dives to industry talks and
        self-improvement strategies,{" "}
        <span>
          I constantly seek new knowledge to refine my skills and expand my
          perspective
        </span>
        . Whether it{"'"}s staying up to date with the latest technologies ,
        exploring best practices, or improving problem-solving abilities,{" "}
        <strong>
          I believe in continuous learning as the key to growth and innovation.
        </strong>
      </p>
    </>
  );
};
