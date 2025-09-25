"use client";

import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(55, 65, 81, 0.7)", // semi-transparent dark background
        zIndex: 50,
        backdropFilter: "blur(10px)", // optional, creates a blur effect for the background
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: "80px", // increased size for better visibility
          height: "80px", // increased size for better visibility
          border: "6px solid #d1d5db", // light gray border
          borderTop: "6px solid #4b6cb7", // animated color (blue gradient)
          borderRadius: "50%",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)", // subtle shadow for depth
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5, // slower rotation for a smoother feel
        }}
      />

      <motion.h3
        style={{
          fontSize: "24px",
          color: "#ffffff",
          marginTop: "20px",
          marginLeft:"20px",
          fontWeight: "bold",
          textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // shadow to make text pop
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2, // text fades in after the loader starts spinning
          duration: 0.5,
        }}
      >
        Loading...
      </motion.h3>
    </motion.div>
  );
};

export default Loader;
