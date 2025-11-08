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

    return (
      <ResponsiveModal
        classNameDialog="space-y-3 overflow-hidden pb-0"
        classNameDrawer="space-y-3 overflow-hidden pb-0"
        onClose={handleResolveModal}
        open={modal.visible}
      >
        <div className="flex lg:flex-row flex-col-reverse items-start w-full">
          <div>
            <h1 className="mb-4 font-semibold text-lg">{project.title}</h1>
            <p className="xl:max-w-[80%]">{project.myThoughts}</p>
          </div>
          <img
            src={`/${project.title.toLowerCase().replace(" ", "")}-logo.png`}
            className="opacity-50 mb-8 w-[10rem] object-contain"
          />
        </div>
      </ResponsiveModal>
    );
  }
);
