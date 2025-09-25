"use client";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <motion.section
      className="relative h-screen bg-gradient-to-b from-cyan-900 to-cyan-800 text-white flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our AI<span className="text-cyan-300"> Powered Services</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Unlock the power of artificial intelligence to revolutionize your business.
        </motion.p>
      </div>
    </motion.section>

      {/* Service Section 1 - AI Strategy */}
      <motion.section
        className="relative py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">AI Strategy</h2>
            <p className="text-xl text-gray-600">
              We guide your business through AI adoption, helping you build a strategic framework to leverage AI technology for growth.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <motion.img
              src="/strategy.png"
              alt="AI Strategy"
              className="rounded-lg shadow-xl h-96 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* Service Section 2 - Predictive Analytics */}
      <motion.section
        className="relative py-20 bg-cyan-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <motion.img
              src="./analysis.png"
              alt="Predictive Analytics"
              className="rounded-lg h-96 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">Predictive Analytics</h2>
            <p className="text-xl text-gray-300">
              Unlock the power of data with AI-driven predictive analytics that help you forecast trends and make informed decisions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Service Section 3 - AI Automation */}
      <motion.section
        className="relative py-20 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">AI Automation</h2>
            <p className="text-xl text-gray-600">
              Streamline your operations by automating repetitive tasks using AI-powered solutions that save time and increase efficiency.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <motion.img
              src="/automation.png"
              alt="AI Automation"
              className="rounded-lg h-96 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 bg-cyan-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">How Our Services Work</h2>
          <div className="flex justify-center gap-16">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center bg-cyan-700 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="text-gray-300 mt-2">
                We assess your business needs and identify AI opportunities.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center bg-cyan-700 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold">AI Development</h3>
              <p className="text-gray-300 mt-2">
                We develop tailored AI solutions to address your unique challenges.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center bg-cyan-700 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-cyan-600 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold">Implementation</h3>
              <p className="text-gray-300 mt-2">
                We integrate AI systems into your existing infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
