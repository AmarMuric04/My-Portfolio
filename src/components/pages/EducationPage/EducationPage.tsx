import { PageSection } from "@/components/molecules";
import { EDUCATION } from "@/assets";

import { EducationCard, Helmet } from "./components";

export const EducationPage = () => {
  return (
    <>
      <Helmet />

      <PageSection>
        <h2 className="mb-8 font-semibold text-2xl transition-al">
          My Education
        </h2>
        <p className="text-lg">
          I'm currently in my second year of university, where I've been
          actively exploring a mix of academic and hands-on projects. From
          coursework to personal initiatives, I've worked on everything from
          creative hobbies to practical solutions for everyday problems. These
          experiences are helping me build a strong foundation and develop
          skills that I'm excited to grow further.
        </p>
      </PageSection>

      <PageSection>
        <ul className="flex flex-col gap-2 my-6">
          {EDUCATION.map((education) => (
            <EducationCard {...education} />
          ))}
        </ul>
      </PageSection>

      <PageSection>
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
          . Whether it{"'"}s staying up to date with the latest technologies,
          exploring best practices, or improving problem-solving abilities,{" "}
          <strong>
            I believe in continuous learning as the key to growth and
            innovation.
          </strong>
        </p>
      </PageSection>
    </>
  );
};
