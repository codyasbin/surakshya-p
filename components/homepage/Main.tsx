'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Main() {
  return (
    <section id="main" className="relative h-screen bg-cyan-800">
      {/* Overlay (Subtle darker shade for better contrast) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-8">
        {/* Animated Headline */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animation triggered when in view
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger animation only once
        >
          Empower Your Business with AI
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animation triggered when in view
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }} // Trigger animation only once
        >
          Leverage the power of artificial intelligence to revolutionize your business processes, enhance decision-making, and deliver remarkable user experiences.
        </motion.p>

        {/* Animated Feature List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animation triggered when in view
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }} // Trigger animation only once
        >
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-600">AI Automation</h2>
            <p className="text-gray-700 mt-4">
              Automate mundane tasks with AI-powered tools that enhance operational efficiency, reduce human error, and save time.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-600">Data-Driven Insights</h2>
            <p className="text-gray-700 mt-4">
              Make smarter business decisions with advanced data analytics, powered by AI-driven insights tailored to your needs.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-600">Custom AI Solutions</h2>
            <p className="text-gray-700 mt-4">
              Our bespoke AI solutions are tailored to fit your business model, ensuring innovation and growth in every step.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <Link href='/services' >
        
              <motion.button
          className="mt-8 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-200"
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 0px 25px rgba(128, 90, 213, 1)', // Glowing effect on hover
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Scroll to the "services" section on the current page
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Our Solutions
        </motion.button>
        </Link>  
      </div>
    </section>
  );
}
