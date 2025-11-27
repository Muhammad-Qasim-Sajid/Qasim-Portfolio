import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function BottomPointer({color = "text-[#f5deb3]"}) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className={`w-6 h-6 ${color}`} />
      </motion.div>
  )
};

export default BottomPointer;