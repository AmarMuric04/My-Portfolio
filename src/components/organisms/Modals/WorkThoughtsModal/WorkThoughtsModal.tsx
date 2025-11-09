import NiceModal, { useModal } from "@ebay/nice-modal-react";

import { WORK } from "@/assets";

import { ResponsiveModal } from "../ResponsiveModal";

export const WorkThoughtsModal = NiceModal.create(
  ({ project }: { project: (typeof WORK)[number] }) => {
    const modal = useModal();

    const handleResolveModal = () => {
      modal.resolve();
      modal.hide();
    };

    const projectLogo =
      "/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

    return (
      <ResponsiveModal
        classNameDrawer="max-h-[85vh]"
        classNameDialog="sm:max-w-3xl"
        onClose={handleResolveModal}
        open={modal.visible}
      >
        <div className="space-y-6">
          {/* Header with logo */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h1 className="font-bold text-2xl mb-2">{project.title}</h1>
              <p className="text-sm text-muted-foreground">
                My Personal Reflections
              </p>
            </div>
            {projectLogo && (
              <img
                className="opacity-30 w-20 h-20 object-contain"
                alt={`${project.title} logo`}
                src={projectLogo}
              />
            )}
          </div>

          {/* Thoughts content */}
          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed">{project.myThoughts}</p>
          </div>
        </div>
      </ResponsiveModal>
    );
  }
);
