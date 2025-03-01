import React, { useEffect } from "react";
import { CrossSVG } from "../../assets/svgs";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  open: string[];
  setIsOpen: Dispatch<SetStateAction<Array<string>>>;
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  setIsOpen,
  id,
  children,
  title,
}) => {
  const closeModal = () => {
    setIsOpen((prevModals) => prevModals.filter((modalId) => modalId !== id));
  };

  useEffect(() => {
    if (open.includes(id)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, id]);

  return (
    <AnimatePresence>
      {open.includes(id) && (
        <motion.div
          onClick={closeModal}
          className="bg-black/50 backdrop-blur-sm fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="p-8 rounded-xl lg:w-[40rem] w-[95%] min-h-[40vh] bg-[#262825] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <header className="flex justify-between items-center mb-8">
              <h1 id="modal-title" className="text-2xl font-semibold">
                {title}
              </h1>
              <button
                className="hover:bg-[#ffffff20] hover:text-red-400 transition-all p-3 rounded-full"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <CrossSVG />
              </button>
            </header>
            <main className="overflow-y-auto max-h-[60vh]">{children}</main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
