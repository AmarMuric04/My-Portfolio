import { TECH_ICONS } from "@/assets";

interface ProjectTechProps {
  techs: {
    [category: string]: string[];
  };
}

const ProjectTech = ({ techs }: ProjectTechProps) => {
  const categoryLabels: { [key: string]: string } = {
    frontend: "Frontend",
    database: "Database",
    backend: "Backend",
    other: "Other",
  };

  return (
    <div className="space-y-3 py-2">
      {Object.entries(techs).map(([category, techList]: [string, string[]]) => {
        if (techList.length === 0) return null;

        return (
          <div className="flex flex-col gap-2" key={category}>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {categoryLabels[category] || category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techList.map((tech: string) => {
                const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS];
                return (
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
                    title={tech}
                    key={tech}
                  >
                    {Icon && (
                      <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                        <Icon />
                      </div>
                    )}
                    <span className="text-xs font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTech;
