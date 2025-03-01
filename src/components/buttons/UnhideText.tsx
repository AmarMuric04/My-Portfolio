import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface UnhideTextProps {
  children: ReactNode;
}

const UnhideText: React.FC<UnhideTextProps> = ({ children }) => {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <span
        onClick={() => setRevealed(true)}
        className="inline cursor-pointer mx-1"
      >
        <span className="inline-flex items-center bg-[#3C3D37] hover:bg-[#3C3D3750] rounded-md px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z"
            />
          </svg>
        </span>
      </span>
    );
  }

  return (
    <motion.span
      initial={{
        scale: 0.95,
        textShadow: "0px 0px 0px rgba(255,255,255,0)",
      }}
      animate={{
        scale: [1.1, 1],
        textShadow: [
          "0px 0px 20px rgba(255,255,255,1)",
          "0px 0px 0px rgba(255,255,255,0)",
        ],
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="text-green-400 inline"
    >
      {children}
    </motion.span>
  );
};

export default UnhideText;
