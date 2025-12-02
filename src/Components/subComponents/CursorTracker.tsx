import React from "react";
import { motion } from "framer-motion";

interface CursorTrackerProps {
  mouseX: number;
  mouseY: number;
}

export const CursorTracker: React.FC<CursorTrackerProps> = ({ mouseX, mouseY }) => {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      animate={{
        background: `radial-gradient(1200px at ${mouseX}px ${mouseY}px, rgba(245, 222, 179, 0.6), transparent 90%)`,
      }}
      style={{
        opacity: 0.15,
        filter: 'blur(15px)',
        mixBlendMode: 'screen',
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    />
  );
};