import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import ProjectItemSkeleton from "../components/project/ProjectSkeleton";

const ProjectList = lazy(() => import("../components/project/ProjectList"));
const SmallProjectList = lazy(
  () => import("../components/project/SmallProjectList")
);

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Amar Muric | Projects</title>
        <meta
          name="description"
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Amar Muric, MERN full-stack developer, projects, MongoDB, Express, React, Node.js, portfolio"
        />
        <meta property="og:title" content="Amar Muric | Projects" />
        <meta
          property="og:description"
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-logo.png" />
        <meta
          property="og:url"
          content="https://your-portfolio-url.com/projects"
        />
      </Helmet>
      <h2 className="transition-all theme-title-text font-semibold text-2xl mb-8">
        Projects
      </h2>
      <p className="text-lg">
        Over the past two years, I’ve taken on a mix of projects—some for
        enjoyment, others to explore concepts, and a few to solve specific
        problems I’ve encountered. Here’s a glimpse at some of what I’ve worked
        on.
      </p>
      <Suspense
        fallback={Array.from({ length: 3 }).map((_, index) => (
          <ProjectItemSkeleton key={index} />
        ))}
      >
        <ProjectList />
        <p className="text-lg my-4">
          Here are a few more projects I’ve tackled. For the full collection,
          feel free to check out my{" "}
          <a
            target="_blank"
            href="https://github.com/AmarMuric04"
            className="hover:text-[#697565] transition-all font-semibold underline cursor-pointer"
          >
            GitHub profile
          </a>
          .
        </p>
        <SmallProjectList />
      </Suspense>
    </>
  );
};

export default Projects;
