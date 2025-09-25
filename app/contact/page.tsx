"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setFormStatus("Submitting...");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Ensure all formData fields are sent
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setFormStatus("Form submitted successfully!");
        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          jobTitle: "",
          jobDetails: "",
        });
      } else {
        // Handle any backend errors
        setFormStatus(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle client-side errors
      setFormStatus("Failed to submit form. Please check your connection and try again.");
      console.error("Submission error:", error);
    }
  };
  

  return (
    <div>
      {/* Hero Section */}
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
          Get in<span className="text-cyan-300"> Touch</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We’d love to hear from you! Whether you have a question or need help with our services, reach out today.
        </motion.p>
      </div>
    </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16 bg-white text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Phone (optional)"
              />
            </div>

            {/* Company Field */}
            <div className="relative">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Company (optional)"
              />
            </div>

            {/* Country Field */}
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                <option value="">Select Your Country</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                {/* Add more country options */}
              </select>
            </div>

            {/* Job Title Field */}
            <div className="relative">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Job Title (optional)"
              />
            </div>

            {/* Job Details Field */}
            <div className="relative">
              <textarea
                name="jobDetails"
                value={formData.jobDetails}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                rows={6}
                placeholder="Please describe your job requirements"
              />
            </div>

            {/* Submit Button */}
            <div className="relative">
              <button
                type="submit"
                className="w-full py-3 bg-cyan-600 text-white font-semibold rounded-md shadow-md hover:bg-cyan-700 transition-all"
              >
                {formStatus === "Submitting..." ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {formStatus === "Form submitted successfully!" && (
            <div className="mt-8 text-center text-green-500 font-semibold">
              Thank you! Your message has been successfully submitted.
            </div>
          )}

          {/* Error Message */}
          {formStatus === "Failed to submit form. Please try again." && (
            <div className="mt-8 text-center text-red-500 font-semibold">
              Something went wrong, please try again later.
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
