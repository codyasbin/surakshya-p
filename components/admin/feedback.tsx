"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

interface Feedback {
  _id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Fetch feedback from the API
  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setFeedbacks(data); // Set the fetched feedback
      } else {
        console.error("Failed to fetch feedback:", data.error);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Function to delete feedback
  const handleDeleteFeedback = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/testimonials/delete?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        alert("Feedback deleted successfully!");
        fetchFeedback(); // Reload the feedback list after deleting
      } else {
        alert(result.error || "Error deleting feedback");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  // Fetch feedback when component mounts
  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <motion.div
      className="p-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Feedbacks</h2>
      
      {/* Loop through the feedbacks */}
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback) => (
          <motion.div
            key={feedback._id}
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{feedback.name}</h3>
                <p className="text-gray-500">{feedback.role}</p>
              </div>
              <button
                onClick={() => handleDeleteFeedback(feedback._id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </div>
            <p className="mt-4 italic">{feedback.feedback}</p>
            <div className="flex mt-4">
              {[...Array(Math.floor(feedback.rating))].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {feedback.rating % 1 !== 0 && (
                <span className="text-yellow-300">★</span>
              )}
            </div>
          </motion.div>
        ))
      ) : (
        <p>No feedback available</p>
      )}
    </motion.div>
  );
}
