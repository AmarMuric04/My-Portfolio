import Project from "./Project";
import { projects } from "../../assets/projects";
import { useEffect, useState } from "react";
import { FilterSVG, MiniArrowDownSVG } from "../../assets/svgs";
import { techSVGS } from "../../assets/projectTechs";
import ActionButton from "../buttons/ActionButton";
import { motion, AnimatePresence } from "framer-motion";
import * as Filter from "../../actions/filter.actions";
import { ProjectType } from "../../types/project";

export default function ProjectList() {
  const [addingFilter, setAddingFilter] = useState<boolean>(false);
  const [showedProjects, setShowedProjects] =
    useState<Array<ProjectType>>(projects);
  const [mustInclude, setMustInclude] = useState<Array<string>>([]);
  const [mustNotInclude, setMustNotInclude] = useState<Array<string>>([]);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  const [excludedCategories, setExcludedCategories] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    if (!addingFilter) {
      setMustInclude([]);
      setMustNotInclude([]);
      setSelectedCategories([]);
      setExcludedCategories([]);
    }
  }, [addingFilter]);

  useEffect(() => {
    if (
      mustInclude.length === 0 &&
      mustNotInclude.length === 0 &&
      selectedCategories.length === 0 &&
      excludedCategories.length === 0
    ) {
      setShowedProjects(projects);
      return;
    }

    setShowedProjects(
      projects.filter((project) => {
        const projectTechs = Object.values(project.techs).flat();
        const techMatch = mustInclude.every((tech) =>
          projectTechs.includes(tech)
        );
        const notTechMatch = mustNotInclude.every(
          (tech) => !projectTechs.includes(tech)
        );

        const categoryMatch =
          selectedCategories.length === 0 ||
          selectedCategories.some(
            (category) =>
              project.techs[category as keyof typeof project.techs]?.length > 0
          );
        const notCategoryMatch = excludedCategories.every(
          (category) =>
            !project.techs[category as keyof typeof project.techs] ||
            project.techs[category as keyof typeof project.techs].length === 0
        );

        return techMatch && notTechMatch && categoryMatch && notCategoryMatch;
      })
    );
  }, [mustInclude, mustNotInclude, selectedCategories, excludedCategories]);

  const availableCategories = ["frontend", "backend", "database", "other"];

  return (
    <>
      <ActionButton
        classes="my-4 px-2"
        action={() => setAddingFilter(!addingFilter)}
      >
        <div className={`transition-all ${addingFilter ? "rotate-180" : ""}`}>
          <MiniArrowDownSVG />
        </div>
        <p>Add a filter</p>
      </ActionButton>

      <AnimatePresence>
        {addingFilter && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="theme-surface p-3 rounded-lg shadow-xl flex flex-col"
          >
            <section className="py-2 border-b-2 theme-border">
              <div className="flex gap-2 mb-2 items-center">
                <FilterSVG />
                <p>
                  Filter by inclusion{" "}
                  <em>
                    (Double click to <strong>exclude</strong>)
                  </em>
                </p>
              </div>
              <ul className="flex gap-2 flex-wrap">
                {Object.keys(techSVGS).map((key) => {
                  const Icon = techSVGS[key];
                  const included = mustInclude.includes(key);
                  const excluded = mustNotInclude.includes(key);
                  return (
                    <li className="flex gap-2 items-center" key={key}>
                      <button
                        className={`p-2 rounded-full hover:bg-[#3C3D37] cursor-pointer ${
                          included
                            ? "theme-accent-background"
                            : excluded
                            ? "bg-[#b91c1c]"
                            : ""
                        }`}
                        onClick={() =>
                          Filter.handleToggleInclusion(
                            key,
                            setMustInclude,
                            setMustNotInclude
                          )
                        }
                        onDoubleClick={() =>
                          Filter.handleDoubleClickInclusion(
                            key,
                            setMustInclude,
                            setMustNotInclude
                          )
                        }
                      >
                        <Icon />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="py-2 border-t-2 theme-border">
              <div className="flex gap-2 mb-2 items-center">
                <FilterSVG />
                <p>
                  Filter by category{" "}
                  <em>
                    (Double click to <strong>exclude</strong>)
                  </em>
                </p>
              </div>
              <ul className="flex gap-2 flex-wrap">
                {availableCategories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  const isExcluded = excludedCategories.includes(category);
                  return (
                    <li key={category}>
                      <button
                        onClick={() =>
                          Filter.handleToggleCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        onDoubleClick={() =>
                          Filter.handleDoubleClickCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        className={`px-2 py-1 cursor-pointer rounded-md hover:bg-[#53594E] transition-colors ${
                          isSelected
                            ? "theme-border-background"
                            : isExcluded
                            ? "bg-[#b91c1c]"
                            : "theme-secondary-background"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          </motion.section>
        )}
      </AnimatePresence>
      <ul className="my-4 flex flex-col gap-4">
        {showedProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
}
