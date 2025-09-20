import { SetStateAction, useCallback, Dispatch } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<Array<string>>>;
  children?: React.ReactNode;
  open: string[];
  title: string;
  id: string;
}

const Modal: React.FC<ModalProps> = ({
  setIsOpen,
  children,
  title,
  open,
  id,
}) => {
  const closeModal = useCallback(() => {
    setIsOpen((prevModals) => prevModals.filter((modalId) => modalId !== id));
  }, [setIsOpen, id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open.includes(id)) {
        closeModal();
      }
    };

    if (open.includes(id)) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, id, closeModal, setIsOpen]);

  return (
    <AnimatePresence>
      {open.includes(id) && (
        <motion.div
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="z-50 fixed inset-0 backdrop-blur-sm"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="top-1/2 left-1/2 absolute shadow-md backdrop-blur-sm p-8 border rounded-lg w-[95%] lg:w-[40rem] min-h-[40vh] -translate-x-1/2 -translate-y-1/2"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-between items-center mb-8">
              <h1 className="font-semibold text-2xl" id="modal-title">
                {title}
              </h1>
              <button
                className="p-1 rounded-md transition-all cursor-pointer"
                aria-label="Close modal"
                onClick={closeModal}
              >
                <X />
              </button>
            </header>
            <main className="max-h-[60vh] overflow-y-auto">{children}</main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
