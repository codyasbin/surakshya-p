"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CaseStudy() {
  return (
    <>
      {/* // Case Studies Section for the Homepage */}
      <motion.section
      className="bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Success Stories
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Discover how we've transformed businesses with our AI-powered
          solutions.
        </p>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://nmgprod.s3.amazonaws.com/media/files/32/a0/32a0839bad3239691845c4fff67fc3fb/cover_image_1686749371.jpeg.760x400_q85_crop_upscale.jpg"
              alt="Retail Automation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600">
                Retail Automation
              </h3>
              <p className="text-gray-700 mt-4">
                Revolutionized inventory management for leading retailers,
                reducing stock shortages by 30%.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-cyan-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://assets.everspringpartners.com/dims4/default/87e89ef/2147483647/strip/true/crop/952x500+318+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Ff2%2F40%2F58ef81fe445ba6d89a2ab5f6677b%2Fwm-msf-future-of-finance.jpg"
              alt="Financial Analytics"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600">
                Financial Analytics
              </h3>
              <p className="text-gray-700 mt-4">
                Delivered AI-powered analytics that helped businesses make
                smarter investment decisions.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-cyan-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://netgaincloud.com/wp-content/uploads/2024/02/Graphic-Azure-Optimization-Healthcare-scaled-1.jpg"
              alt="Healthcare Optimization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600">
                Healthcare Optimization
              </h3>
              <p className="text-gray-700 mt-4">
                Improved patient care efficiency by 40% through AI-driven
                healthcare solutions.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-cyan-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
}
