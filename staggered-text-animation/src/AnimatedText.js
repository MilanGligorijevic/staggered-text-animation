import React from "react";
import { motion } from "framer-motion";

function AnimatedText({ children }) {
  const animationVariants = {
    initial: { y: 0 },
    hover: {
      y: "-100%",
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <div>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={animationVariants}
              transition={{
                duration: 0.18,
                delay: 0.03 * index,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute">
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={animationVariants}
              transition={{
                duration: 0.18,
                delay: 0.03 * index,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AnimatedText;
