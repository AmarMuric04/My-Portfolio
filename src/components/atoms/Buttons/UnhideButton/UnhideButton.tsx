import React, { ReactNode, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { UnhideTextSVG } from "@/svgs";

export const UnhideButton: React.FC<{ children: ReactNode }> = React.memo(
  ({ children }) => {
    const [revealed, setRevealed] = useState(false);
    const [enableAnimation, setEnableAnimation] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
      if (timerRef.current) {
        timerRef.current = setTimeout(() => setEnableAnimation(true), 500);
      }

      return () => {
        clearTimeout(timerRef.current);
      };
    }, []);

    if (!revealed) {
      return (
        <span
          className="inline mx-1 cursor-pointer"
          onClick={() => setRevealed(true)}
        >
          <span className="inline-flex items-center px-1 theme-border-background rounded-md transition-all theme-surface-hover">
            <UnhideTextSVG />
          </span>
        </span>
      );
    }

    if (!enableAnimation) {
      return <span className="inline text-green-400">{children}</span>;
    }

    return (
      <motion.span
        animate={{
          textShadow: [
            "0px 0px 20px rgba(255,255,255,1)",
            "0px 0px 0px rgba(255,255,255,0)",
          ],
          scale: [1.1, 1],
        }}
        initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)", scale: 0.95 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="inline text-green-400"
      >
        {children}
      </motion.span>
    );
  }
);
