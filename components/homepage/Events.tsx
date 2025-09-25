"use client"
import { motion } from "framer-motion";
import React from "react";

export default function Event() {
  return (
    // Events Section for the Homepage
    <motion.section
      className="bg-gray-100 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Upcoming Events
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Join us at our upcoming events and learn more about our solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Event 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-600">
              AI Conference 2024
            </h3>
            <p className="text-gray-700 mt-4">
              Date: Jan 15, 2024 <br />
              Location: San Francisco, CA
            </p>
          </div>
          {/* Event 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-600">
              Webinar: AI in Healthcare
            </h3>
            <p className="text-gray-700 mt-4">
              Date: Feb 20, 2024 <br />
              Online Event
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
