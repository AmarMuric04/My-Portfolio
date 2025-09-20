import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { MiniArrowDownSVG, FilterSVG } from "../../assets/svgs";
import * as Filter from "../../actions/filter.actions";
import { techSVGS } from "../../assets/projectTechs";
import ActionButton from "../buttons/ActionButton";
import { ProjectType } from "../../types/project";
import { projects } from "../../assets/WORK";
import Project from "./Project";

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
        onClick={() => setAddingFilter(!addingFilter)}
        className="my-4 px-2"
      >
        <div className={`transition-all ${addingFilter ? "rotate-180" : ""}`}>
          <MiniArrowDownSVG />
        </div>
        <p>Add a filter</p>
      </ActionButton>

      <AnimatePresence>
        {addingFilter && (
          <motion.section
            className="flex flex-col shadow-xl p-3 rounded-lg"
            transition={{ ease: "easeOut", duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <section className="py-2 border-b-2">
              <div className="flex items-center gap-2 mb-2">
                <FilterSVG />
                <p>
                  Filter by inclusion{" "}
                  <em>
                    (Double click to <strong>exclude</strong>)
                  </em>
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {Object.keys(techSVGS).map((key) => {
                  const Icon = techSVGS[key];
                  const included = mustInclude.includes(key);
                  const excluded = mustNotInclude.includes(key);
                  return (
                    <li className="flex items-center gap-2" key={key}>
                      <button
                        className={`size-10 border-2 grid place-items-center rounded-full hover:bg-[#3C3D37] cursor-pointer ${
                          included
                            ? "border-green-500"
                            : excluded
                              ? "border-red-500 hover:bg-[#b91c1c70]"
                              : "border-transparent"
                        }`}
                        onClick={() =>
                          Filter.handleToggleInclusion(
                            key,
                            setMustInclude,
                            setMustNotInclude,
                            excluded
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

            <section className="py-2 border-t-2">
              <div className="flex items-center gap-2 mb-2">
                <FilterSVG />
                <p>
                  Filter by category{" "}
                  <em>
                    (Double click to <strong>exclude</strong>)
                  </em>
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {availableCategories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  const isExcluded = excludedCategories.includes(category);
                  return (
                    <li key={category}>
                      <button
                        onDoubleClick={() =>
                          Filter.handleDoubleClickCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        onClick={() =>
                          Filter.handleToggleCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        className={`px-2 py-1 cursor-pointer rounded-md hover:bg-[#53594E] transition-colors ${
                          isSelected ? "" : isExcluded ? "bg-[#b91c1c]" : ""
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
      <ul className="flex flex-col gap-4 my-4">
        {showedProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
}
