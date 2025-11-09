import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ReactMarkdown from "react-markdown";

import { ResponsiveModal } from "../ResponsiveModal";

export const READMEmdModal = NiceModal.create(
  ({ markdown }: { markdown: string }) => {
    const modal = useModal();

    const handleClose = () => {
      modal.resolve();
      modal.hide();
    };

    return (
      <ResponsiveModal
        classNameDialog="sm:max-w-3xl"
        classNameDrawer="max-h-[90vh]"
        onClose={handleClose}
        open={modal.visible}
      >
        <div className="space-y-4">
          <div className="border-b pb-3">
            <h1 className="font-bold text-2xl">README.md</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Project Documentation
            </p>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </ResponsiveModal>
    );
  }
);
