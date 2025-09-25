"use client";

import { useState } from "react";

interface FeedbackData {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    role: "",
    image: "",
    feedback: "",
    rating: 5,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/testimonials/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("Feedback submitted successfully!");
        setFormData({
          name: "",
          role: "",
          image: "",
          feedback: "",
          rating: 5,
        });
      } else {
        setErrorMessage(result.error || "Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto mt-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-semibold text-center text-gray-800">
        Share Your Thoughts with Us
      </h3>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Role Input */}
        <div>
          <input
            type="text"
            name="role"
            placeholder="Your Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Image URL Input */}
        <div>
          <input
            type="text"
            name="image"
            placeholder="Add profile image url"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Feedback Textarea */}
        <div>
          <textarea
            name="feedback"
            placeholder="Share your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full p-4 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="text-gray-600 font-semibold">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Display success or error messages */}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Your Feedback"}
          </button>
        </div>
      </div>
    </form>
  );
}
