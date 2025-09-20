import { Helmet } from "react-helmet";

import SmallProjectList from "../project/SmallProjectList";
import ProjectList from "../project/ProjectList";

export const WorkPage = () => {
  return (
    <>
      <Helmet>
        <title>Amar Muric | Projects</title>
        <meta
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
          name="description"
        />
        <meta
          content="Amar Muric, MERN full-stack developer, projects, MongoDB, Express, React, Node.js, portfolio"
          name="keywords"
        />
        <meta content="Amar Muric | Projects" property="og:title" />
        <meta
          content="Explore the projects of Amar Muric, a MERN full-stack developer. View web applications built using MongoDB, Express, React, and Node.js."
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta content="/portfolio-logo.png" property="og:image" />
        <meta
          content="https://your-portfolio-url.com/projects"
          property="og:url"
        />
      </Helmet>
      <h2 className="mb-8 font-semibold text-2xl transition-al">Projects</h2>
      <p className="text-lg">
        Over the past two years, I’ve taken on a mix of projects—some for
        enjoyment, others to explore concepts, and a few to solve specific
        problems I’ve encountered. Here’s a glimpse at some of what I’ve worked
        on.
      </p>
      <ProjectList />
      <p className="my-4 text-lg">
        Here are a few more projects I’ve tackled. For the full collection, feel
        free to check out my{" "}
        <a
          className="font-semibold hover:text-[#697565] underline transition-all cursor-pointer"
          href="https://github.com/AmarMuric04"
          target="_blank"
        >
          GitHub profile
        </a>
        .
      </p>
      <SmallProjectList />
    </>
  );
};
