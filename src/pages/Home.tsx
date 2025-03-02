import Myself from "/myself.webp";
import UnhideText from "../components/buttons/UnhideText";
import { GithubSVG, LinkedInSVG, MailSVG } from "../assets/svgs";
import { Helmet } from "react-helmet";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Amar Muric | About Me</title>
        <meta
          name="description"
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Amar Muric, full-stack developer, MERN, portfolio, developer journey, MongoDB, Express, React, Node.js"
        />
        <meta property="og:title" content="Amar Muric | About Me" />
        <meta
          property="og:description"
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-logo.png" />
        <link rel="preload" as="image" href="/myself.webp" />
      </Helmet>

      <section className="flex flex-col text-center sm:flex-row sm:text-start items-center gap-4 mt-8">
        <img
          className="h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] rounded-full"
          src={Myself}
          alt="Amar Murić"
        />
        <div>
          <h2 className="font-bold transition-all theme-title-text text-xl sm:text-4xl">
            Amar Murić
          </h2>
          <p className="sm:text-xl">
            Fullstack Software Engineer based in Serbia
          </p>
        </div>
      </section>

      <section className="my-8 sm:text-lg leading-8">
        I’m a 20-year-old full-stack developer with a deep passion for building
        polished, impactful, and innovative products. My journey into
        programming began in 2022-2023
        <UnhideText>
          , and it’s been an exhilarating ride ever since,
        </UnhideText>
        captivated by the art of creating beautiful and responsive user
        interfaces, but my curiosity quickly led me to explore the backend,
        databases, and DevOps, transforming me into a well-rounded full-stack
        developer.{" "}
        <strong>
          <em>
            My primary stack is the MERN (MongoDB, Express.js, React, Node.js)
          </em>
        </strong>{" "}
        ecosystem
        <UnhideText>
          {" "}
          but I’m always experimenting with modern tools like{" "}
          <strong>
            Next.js for server-side rendering, WebSocket for real-time
            communication
          </strong>
          , and other cutting-edge technologies.
        </UnhideText>
        <p className="mt-4">
          <UnhideText>
            Although I don’t have formal work experience yet,
          </UnhideText>{" "}
          I’ve spent countless hours building personal projects, contributing to
          open-source, and immersing myself in the developer community.{" "}
          <UnhideText>
            I thrive on taking rough, abstract ideas and turning them into fully
            functional, well-designed products.
          </UnhideText>
        </p>
        {/* Further paragraphs … */}
      </section>

      <section className="flex items-center gap-8 flex-wrap">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AmarMuric04"
          className="theme-text-secondary-hover flex gap-3 text-lg cursor-pointer items-center transition-all"
        >
          <GithubSVG />
          <p>GitHub</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/"
          className="theme-text-secondary-hover flex gap-3 text-lg cursor-pointer items-center transition-all"
        >
          <LinkedInSVG />
          <p>LinkedIn</p>
        </a>
        <a
          href="mailto:muricamar2004@gmail.com"
          className="theme-text-secondary-hover flex gap-3 text-lg cursor-pointer items-center transition-all"
        >
          <MailSVG />
          <p>Email</p>
        </a>
      </section>
    </>
  );
};

export default Home;
