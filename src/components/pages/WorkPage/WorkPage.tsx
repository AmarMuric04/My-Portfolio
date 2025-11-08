import ProjectList from "@/components/project/ProjectList";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageSection } from "@/components/molecules";
import { WORK } from "@/assets";

import { PageHelmet } from "./components";

export const WorkPage = () => {
  return (
    <TooltipProvider>
      <>
        <PageHelmet />

        <PageSection>
          <h2 className="mb-8 font-semibold text-2xl transition-al">
            Projects
          </h2>
          <p className="text-lg">
            Over the past two years, I've taken on a mix of projects—some for
            enjoyment, others to explore concepts, and a few to solve specific
            problems I've encountered. Here's a glimpse at some of what I've
            worked on.
          </p>
        </PageSection>

        <PageSection>
          <ProjectList />
        </PageSection>

        <PageSection>
          <p className="my-4 text-lg">
            Here are a few more projects I've tackled. For the full collection,
            feel free to check out my{" "}
            <a
              className="font-semibold underline transition-all cursor-pointer"
              href="https://github.com/AmarMuric04"
              target="_blank"
            >
              GitHub profile
            </a>
            .
          </p>
        </PageSection>

        <PageSection>
          <ul className="flex flex-col gap-2">
            {WORK.map((project) => (
              <p>{project.content}</p>
            ))}
          </ul>
        </PageSection>
      </>
    </TooltipProvider>
  );
};
