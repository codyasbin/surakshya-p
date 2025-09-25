"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the structure for the testimonial data
interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch testimonials from the API, run only once when the component mounts
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setTestimonials(data);
      } else {
        console.error("Failed to fetch testimonials:", data.error);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Cycle through testimonials: Next
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Cycle through testimonials: Previous
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Fetch testimonials only once when the component mounts
  useEffect(() => {
    fetchTestimonials();
  }, []); // Empty dependency array to ensure it runs only once on mount

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 3000); // Change every 3 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [testimonials]); // Trigger effect when testimonials are loaded

  return (
    <motion.section
      className="relative h-screen bg-gradient-to-b from-cyan-900 to-cyan-950 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
        <p className="text-gray-300 text-center mt-4">
          Trusted by businesses across industries to deliver excellence.
        </p>

        {/* Main Testimonial Display */}
        <div className="relative h-96 mt-16 flex justify-center items-center">
          {/* Supporting Testimonials (Left) */}
          {testimonials.length > 0 && (
            <motion.div
              className="absolute left-10 hidden md:block bg-white p-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].image}
                alt={testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-cyan-600"
              />
              <p className="mt-2 text-gray-800 font-semibold text-center">
                {testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name}
              </p>
              <p className="text-sm text-gray-500 text-center">
                {testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].role}
              </p>
            </motion.div>
          )}

          {/* Active Testimonial */}
          {testimonials.length > 0 && (
            <motion.div
              key={testimonials[activeIndex]._id}
              className="bg-white p-8 rounded-full shadow-lg text-center w-96 transform hover:scale-110 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-cyan-600"
              />
              <p className="mt-6 italic text-gray-700">
                "{testimonials[activeIndex].feedback}"
              </p>
              <div className="mt-4 flex justify-center text-yellow-500">
                {[...Array(Math.floor(testimonials[activeIndex].rating))].map(
                  (_, i) => (
                    <span key={i}>★</span>
                  )
                )}
                {testimonials[activeIndex].rating % 1 !== 0 && (
                  <span className="text-yellow-300">★</span> // Half-star
                )}
              </div>
              <p className="mt-4 font-bold">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
            </motion.div>
          )}

          {/* Supporting Testimonials (Right) */}
          {testimonials.length > 0 && (
            <motion.div
              className="absolute right-10 hidden md:block bg-white p-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonials[(activeIndex + 1) % testimonials.length].image}
                alt={testimonials[(activeIndex + 1) % testimonials.length].name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-cyan-600"
              />
              <p className="mt-2 text-gray-800 font-semibold text-center">
                {testimonials[(activeIndex + 1) % testimonials.length].name}
              </p>
              <p className="text-sm text-gray-500 text-center">
                {testimonials[(activeIndex + 1) % testimonials.length].role}
              </p>
            </motion.div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-md"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
}
