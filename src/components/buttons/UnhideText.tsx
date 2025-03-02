import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { UnhideTextSVG } from "../../assets/svgs";

// Memoize the component to prevent unnecessary re-renders
const UnhideText: React.FC<{ children: ReactNode }> = React.memo(
  ({ children }) => {
    const [revealed, setRevealed] = useState(false);
    const [enableAnimation, setEnableAnimation] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setEnableAnimation(true), 500);
      return () => clearTimeout(timer);
    }, []);

    if (!revealed) {
      return (
        <span
          onClick={() => setRevealed(true)}
          className="inline cursor-pointer mx-1"
        >
          <span className="inline-flex items-center theme-border-background theme-surface-hover transition-all rounded-md px-1">
            <UnhideTextSVG />
          </span>
        </span>
      );
    }

    if (!enableAnimation) {
      return <span className="text-green-400 inline">{children}</span>;
    }

    return (
      <motion.span
        initial={{ scale: 0.95, textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
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
  }
);

export default UnhideText;
