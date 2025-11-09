import React, { ReactNode, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

import { Button } from "@/components/ui/button";

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
        <Button
          className="inline-flex mx-1.5 top-0.5 relative cursor-pointer py-1 h-fit"
          onClick={() => setRevealed(true)}
          variant="outline"
          size="icon"
        >
          <Code />
        </Button>
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
