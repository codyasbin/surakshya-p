// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import TypingAnimation component and disable SSR
const TypingAnimation = dynamic(() => import("../animations/TypingAnimation"), {
  ssr: false,
});

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  // Set the client-side state to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render the Hero until after the client has loaded

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero2.png')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Typing Animation for Headline */}
        <TypingAnimation text="Welcome to AI-Solution" />
        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Innovating the digital employee experience with AI-powered solutions.
        </p>

        {/* Glowing Get Started Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-cyan-600 text-white font-semibold text-lg rounded-full shadow-md"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(128, 90, 213, 1)", // cyan glow effect
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Scroll to the "main" section on the current page
            console.log("button clicked");

            const mainSection = document.getElementById("main");

            if (mainSection) {
              mainSection.scrollIntoView({ behavior: "smooth" });
            } else {
              console.error("Element with id 'main' not found.");
            }
          }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
