"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-cyan-950 to-cyan-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Vision, Mission & Values
        </h2>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Vision Section */}
          <motion.div
            className="relative flex flex-col justify-center items-center p-10 text-center bg-cyan-800 rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-semibold text-cyan-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our Vision
            </motion.h3>
            <motion.p
              className="mt-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              To be the global leader in AI-powered solutions, revolutionizing industries and
              enhancing lives through innovation and technology.
            </motion.p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="relative flex flex-col justify-center items-center p-10 text-center bg-cyan-900 rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-semibold text-cyan-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="mt-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our mission is to provide innovative and data-driven AI solutions that enable businesses
              to streamline operations, increase productivity, and enhance decision-making.
            </motion.p>
          </motion.div>

        </div>

        {/* Core Values Section */}
        <motion.div
          className="mt-16 bg-cyan-800 p-12 rounded-lg shadow-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-cyan-300">Our Core Values</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://www.clipartmax.com/png/middle/441-4413479_the-innovation-award-recognises-new-ways-of-thinking-meet-and-code-logo.png"
                alt="Innovation"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-cyan-600">Innovation</h4>
              <p className="text-gray-700 mt-4">
                We thrive on constant innovation, always pushing the boundaries of what AI can achieve.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/17353/17353795.png"
                alt="Integrity"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-cyan-600">Integrity</h4>
              <p className="text-gray-700 mt-4">
                Our work is built on a foundation of transparency, honesty, and ethical practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <img
                src="https://png.pngtree.com/png-vector/20210307/ourmid/pngtree-excellent-academic-report-linear-icon-png-image_3015286.png"
                alt="Excellence"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-cyan-600">Excellence</h4>
              <p className="text-gray-700 mt-4">
                We strive for excellence in everything we do, setting high standards for quality and performance.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
