import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Filter, X } from "lucide-react";
import { useEffect, useState } from "react";

import * as FilterActions from "../../actions/filter.actions";
import { TECH_ICONS } from "../../assets/projectTechs";
import { TooltipProvider } from "../ui/tooltip";
import { WORK } from "../../assets/WORK";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Project } from "./Project";

interface ProjectType {
  techs: {
    [category: string]: string[];
  };
  [key: string]: any;
  title: string;
}

export default function ProjectList() {
  const [addingFilter, setAddingFilter] = useState<boolean>(false);
  const [showedProjects, setShowedProjects] = useState<Array<any>>([...WORK]);
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
      setShowedProjects([...WORK]);
      return;
    }

    setShowedProjects(
      [...WORK].filter((project: any) => {
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
  const availableTechs = Object.keys(TECH_ICONS);

  const activeFiltersCount =
    mustInclude.length +
    mustNotInclude.length +
    selectedCategories.length +
    excludedCategories.length;

  return (
    <TooltipProvider>
      <div className="my-6 space-y-4">
        <Button
          onClick={() => setAddingFilter(!addingFilter)}
          className="w-full sm:w-auto"
          variant="outline"
          size="lg"
        >
          <Filter className="w-4 h-4" />
          <span>Filter Projects</span>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
          <ChevronDown
            className={`w-4 h-4 ml-auto transition-transform ${addingFilter ? "rotate-180" : ""}`}
          />
        </Button>

        <AnimatePresence>
          {addingFilter && (
            <motion.div
              className="border rounded-lg p-6 space-y-6 bg-card shadow-lg overflow-hidden"
              transition={{ ease: "easeOut", duration: 0.2 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >

              {/* Category Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-sm">Filter by Category</h3>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Click to include, double-click to exclude
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableCategories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    const isExcluded = excludedCategories.includes(category);
                    return (
                      <Button
                        onDoubleClick={() =>
                          FilterActions.handleDoubleClickCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        onClick={() =>
                          FilterActions.handleToggleCategory(
                            category,
                            setSelectedCategories,
                            setExcludedCategories
                          )
                        }
                        variant={
                          isSelected
                            ? "default"
                            : isExcluded
                              ? "destructive"
                              : "outline"
                        }
                        className="capitalize"
                        key={category}
                        size="sm"
                      >
                        {category}
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Technology Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-sm">
                    Filter by Technology
                  </h3>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Click to include, double-click to exclude
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableTechs.map((tech) => {
                    const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS];
                    const included = mustInclude.includes(tech);
                    const excluded = mustNotInclude.includes(tech);
                    return (
                      <Button
                        onClick={() =>
                          FilterActions.handleToggleInclusion(
                            tech,
                            setMustInclude,
                            setMustNotInclude,
                            excluded
                          )
                        }
                        onDoubleClick={() =>
                          FilterActions.handleDoubleClickInclusion(
                            tech,
                            setMustInclude,
                            setMustNotInclude
                          )
                        }
                        variant={
                          included
                            ? "default"
                            : excluded
                              ? "destructive"
                              : "outline"
                        }
                        className="gap-1.5"
                        key={tech}
                        size="sm"
                      >
                        {Icon && (
                          <div className="w-3.5 h-3.5 flex items-center justify-center">
                            <Icon />
                          </div>
                        )}
                        <span className="text-xs">{tech}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters Display - Below the collapsible filter panel */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 p-4 border rounded-lg bg-muted/30">
            <span className="text-sm font-medium text-muted-foreground">
              Active filters:
            </span>
            {mustInclude.map((tech) => (
              <Badge variant="default" className="gap-1" key={tech}>
                {tech}
                <X
                  onClick={() =>
                    setMustInclude(mustInclude.filter((t) => t !== tech))
                  }
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                />
              </Badge>
            ))}
            {mustNotInclude.map((tech) => (
              <Badge variant="destructive" className="gap-1" key={tech}>
                Not {tech}
                <X
                  onClick={() =>
                    setMustNotInclude(
                      mustNotInclude.filter((t) => t !== tech)
                    )
                  }
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                />
              </Badge>
            ))}
            {selectedCategories.map((cat) => (
              <Badge variant="secondary" className="gap-1" key={cat}>
                {cat}
                <X
                  onClick={() =>
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== cat)
                    )
                  }
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                />
              </Badge>
            ))}
            {excludedCategories.map((cat) => (
              <Badge variant="outline" className="gap-1" key={cat}>
                Not {cat}
                <X
                  onClick={() =>
                    setExcludedCategories(
                      excludedCategories.filter((c) => c !== cat)
                    )
                  }
                  className="w-3 h-3 cursor-pointer hover:opacity-70"
                />
              </Badge>
            ))}
          </div>
        )}

        <ul className="flex flex-col gap-4 my-4">
          {showedProjects.map((project) => (
            <Project project={project as any} key={project.title} />
          ))}
        </ul>
      </div>
    </TooltipProvider>
  );
}
