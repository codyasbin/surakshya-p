// components/TypingAnimation.tsx
"use client";

import { motion } from 'framer-motion';

type TypingAnimationProps = {
  text: string;
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text }) => {
  // Variants for the letter-by-letter animation
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold leading-tight"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingAnimation;
