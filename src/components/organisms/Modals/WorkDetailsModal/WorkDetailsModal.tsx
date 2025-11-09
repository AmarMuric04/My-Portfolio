import { Lightbulb, Rocket, Target, Globe, Code } from "lucide-react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

import ProjectTech from "@/components/project/ProjectTech";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubSVG } from "@/assets/svgs";
import { WORK } from "@/assets";

import { WorkThoughtsModal } from "../WorkThoughtsModal";
import { ResponsiveModal } from "../ResponsiveModal";

export const WorkDetailsModal = NiceModal.create(
  ({ project }: { project: (typeof WORK)[number] }) => {
    const modal = useModal();

    const { show: showWorkThoughtsModal } = useModal(WorkThoughtsModal);

    const handleResolveModal = () => {
      modal.resolve();
      modal.hide();
    };

    const projectLogo =
      "/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

    return (
      <ResponsiveModal
        classNameDialog="sm:max-w-3xl"
        classNameDrawer="max-h-[90vh]"
        onClose={handleResolveModal}
        open={modal.visible}
      >
        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="font-bold text-3xl">{project.title}</h1>
                  {projectLogo && (
                    <img
                      className="w-10 h-10 object-contain opacity-40"
                      alt={`${project.title} logo`}
                      src={projectLogo}
                    />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="default">{project.type}</Badge>
                  <Badge variant="secondary">{project.status}</Badge>
                  <span className="text-sm text-muted-foreground">
                    • {project.duration}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {project.content}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {project.github && (
                <Button variant="default" size="sm" asChild>
                  <a
                    aria-label="Open GitHub repository"
                    rel="noopener noreferrer"
                    href={project.github}
                    target="_blank"
                  >
                    <div className="w-4 h-4 mr-2">
                      <GithubSVG />
                    </div>
                    Source Code
                  </a>
                </Button>
              )}

              {project.website && (
                <Button variant="default" size="sm" asChild>
                  <a
                    aria-label="Open website"
                    rel="noopener noreferrer"
                    href={project.website}
                    target="_blank"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}

              <Button
                onClick={() => showWorkThoughtsModal({ project })}
                variant="outline"
                size="sm"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                My Thoughts
              </Button>
            </div>
          </div>

          <div className="border-t pt-6 space-y-8">
            {/* Key Features */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-xl">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    key={feature + project.title}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-xl">Technologies</h2>
              </div>
              <ProjectTech techs={project.techs} />
            </section>

            {/* Challenges & Learning */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Challenges</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">What I Learned</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.learningOutcomes}
                </p>
              </div>
            </section>

            {/* Future Plans */}
            {project.futurePlans.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-xl">Future Roadmap</h2>
                </div>
                <ul className="space-y-2">
                  {project.futurePlans.map((plan) => (
                    <li
                      className="flex items-start gap-3"
                      key={plan + project.title}
                    >
                      <span className="mt-1.5 bg-primary rounded-full w-1.5 h-1.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {plan}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Additional Info Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-2">
                  Deployment
                </h4>
                <p className="text-sm">{project.deployment}</p>
              </div>
              <div>
                <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-2">
                  Contributions
                </h4>
                <p className="text-sm">{project.contributions}</p>
              </div>
              <div>
                <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-2">
                  Accessibility
                </h4>
                <p className="text-sm">{project.accessibility}</p>
              </div>
            </section>
          </div>
        </div>
      </ResponsiveModal>
    );
  }
);
