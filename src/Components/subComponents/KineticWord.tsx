import { motion } from "framer-motion";

interface KineticWordProps {
  text: string;
  className?: string;
  delayOffset?: number;
  style?: React.CSSProperties;
}

const KineticWord: React.FC<KineticWordProps> = ({ 
  text, 
  className = "", 
  delayOffset = 0, 
  style 
}) => {
  return (
    <p className={className} style={style}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10, 
            delay: 0.8 + delayOffset + index * 0.03 
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </p>
  );
};

export default KineticWord;