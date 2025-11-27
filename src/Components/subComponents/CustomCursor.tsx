import React from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

interface CustomCursorProps {
  mousePosition: MousePosition;
  color: string;
  borderColor: string;
}

interface CursorTrackerProps {
  mouseX: number;
  mouseY: number;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition, color, borderColor }) => {
  return (
    <motion.div
      className={`fixed z-[9999] pointer-events-none rounded-full border ${borderColor} flex items-center justify-center`}
      style={{
        width: '28px',
        height: '28px',
        left: 0,
        top: 0,
      }}
      animate={{
        x: mousePosition.x - 14,
        y: mousePosition.y - 14,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
    </motion.div>
  );
};

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