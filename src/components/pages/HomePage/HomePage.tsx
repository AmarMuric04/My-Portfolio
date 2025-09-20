import { Helmet } from "react-helmet";

import { UnhideButton } from "@/components/atoms";

import { LinkedInSVG, GithubSVG, MailSVG } from "../../../assets/svgs";

import Myself from "/myself.webp";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Amar Muric | About Me</title>
        <meta
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
          name="description"
        />
        <meta
          content="Amar Muric, full-stack developer, MERN, portfolio, developer journey, MongoDB, Express, React, Node.js"
          name="keywords"
        />
        <meta content="Amar Muric | About Me" property="og:title" />
        <meta
          content="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta content="/portfolio-logo.png" property="og:image" />
      </Helmet>

      <section className="flex sm:flex-row flex-col gap-4 mt-8 text-center">
        <img
          className="rounded-full w-[3rem] sm:w-[5rem] h-[3rem] sm:h-[5rem]"
          alt="Amar Murić"
          src={Myself}
        />
        <div>
          <h2 className="font-bold text-xl sm:text-4xl transition-all">
            Amar Murić
          </h2>
          <p className="sm:text-xl">
            Fullstack Software Engineer based in Serbia
          </p>
        </div>
      </section>

      <section className="my-8 sm:text-lg leading-8">
        <p>
          I’m a 20-year-old full-stack developer with a deep passion for
          building polished, impactful, and innovative products. My journey into
          programming began in 2022-2023
          <UnhideButton>
            , and it’s been an exhilarating ride ever since
            <UnhideButton>
              , captivated by the art of creating beautiful and responsive user
              interfaces
            </UnhideButton>
          </UnhideButton>
          , but my curiosity quickly led me to explore the backend, databases,
          and DevOps, transforming me into a well-rounded full-stack developer.
          <strong>
            <em>
              {" "}
              My primary stack is the MERN (MongoDB, Express.js, React, Node.js)
            </em>
          </strong>{" "}
          ecosystem{" "}
          <UnhideButton>
            but I’m always experimenting with modern tools like{" "}
            <strong>
              {" "}
              Next.js for server-side rendering, WebSocket for real-time
              communication
            </strong>
            , and other cutting-edge technologies that push the boundaries of
            what’s possible on the web
          </UnhideButton>
          .
        </p>
        <p className="mt-4">
          <UnhideButton>
            {"Although I don’t have formal work experience yet, "}
          </UnhideButton>
          I’ve spent countless hours building personal projects, contributing to
          open-source, and immersing myself in the developer community.{" "}
          <UnhideButton>
            I thrive on taking rough, abstract ideas and turning them into fully
            functional, well-designed products
            <UnhideButton>
              —whether it’s crafting intuitive user interfaces, designing
              scalable and efficient backends, optimizing databases, or
              automating deployment <strong>pipelines with CI/CD tools.</strong>
            </UnhideButton>
          </UnhideButton>{" "}
          I’m a <strong>quick learner</strong> and love diving into new
          frameworks, libraries, and tools to expand my skill set and stay ahead
          in the ever-evolving tech landscape.
        </p>
        <p className="mt-4">
          So far, I’ve built a variety of projects
          <UnhideButton>
            , from dynamic web applications and e-commerce platforms to
            real-time chat systems and interactive dashboards
          </UnhideButton>
          . Each project has been a learning experience, helping me refine my
          <strong> problem-solving skills</strong> and deepen my understanding
          of the full development lifecycle.{" "}
          <UnhideButton>
            I’m particularly fascinated by the intersection of design and
            technology, and
          </UnhideButton>{" "}
          I strive to create products that are <em>not</em>{" "}
          <strong>
            only functional and performant but also visually appealing,
            accessible, and user-friendly
          </strong>
          .{" "}
          <UnhideButton>
            I believe that great software is a{" "}
            <strong>blend of technical excellence and thoughtful design</strong>
            .
          </UnhideButton>
        </p>
        <p className="mt-4">
          While I’m still early in my career, I’m incredibly excited about the
          future and the opportunities to{" "}
          <UnhideButton>
            grow <UnhideButton>, collaborate,</UnhideButton> and
          </UnhideButton>{" "}
          make a meaningful impact in the tech world. I’m always{" "}
          <strong>
            eager to learn, share knowledge, and connect with like-minded
            developers
          </strong>{" "}
          who are passionate about building cool things and solving real-world
          problems.{" "}
          <UnhideButton>
            Whether it’s through open-source contributions, hackathons, or
            personal projects,{" "}
            <UnhideButton>
              I’m committed to continuously improving my craft and contributing
              to the developer community in meaningful ways.
            </UnhideButton>
          </UnhideButton>
        </p>
      </section>
      <section className="flex flex-wrap items-center gap-8">
        <a
          className="flex items-center gap-3 text-lg transition-all cursor-pointer"
          href="https://github.com/AmarMuric04"
          target="_blank"
        >
          <GithubSVG />
          <p>GitHub</p>
        </a>
        <a
          className="flex items-center gap-3 text-lg transition-all cursor-pointer"
          href="https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/"
          target="_blank"
        >
          <LinkedInSVG />
          <p>LinkedIn</p>
        </a>
        <a
          className="flex items-center gap-3 text-lg transition-all cursor-pointer"
          href="mailto:muricamar2004@gmail.com"
        >
          <MailSVG />
          <p>Email</p>
        </a>
      </section>
    </>
  );
};
