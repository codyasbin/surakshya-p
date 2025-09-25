"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const events = [
  {
    title: "AI Conference 2024",
    date: "Jan 15, 2024",
    location: "San Francisco, CA",
    description: "Explore the latest advancements in AI and network with industry leaders.",
    image: "https://i.ytimg.com/vi/4dQC3MEb4So/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBh3CsuQz0-08V8DhTjXK4BhTMIOA", // Replace with actual image URL
  },
  {
    title: "Webinar: AI in Healthcare",
    date: "Feb 20, 2024",
    location: "Online Event",
    description: "Discover how AI is revolutionizing the healthcare industry.",
    image: "https://75d03c5f1bfbbbb9cc13-369a671ebb934b49b239e372822005c5.ssl.cf1.rackcdn.com/live-webinar-promise-and-peril-ai-in-healthcare-showcase_image-8-w-5108.jpg", // Replace with actual image URL
  },
  {
    title: "Tech Expo 2024",
    date: "March 5, 2024",
    location: "New York, NY",
    description: "Experience groundbreaking tech innovations at this year’s expo.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlQrsT_qTR7YWYqwGStGGOhsryeB93vREfA&s", // Replace with actual image URL
  },
];

export default function EventsSection() {
  return (
    <motion.section
      className="py-16 bg-cyan-50 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-cyan-950 font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-300 mt-2">
                  {event.date} - {event.location}
                </p>
                <p className="mt-4 text-gray-400">{event.description}</p>
                <Link href={"contact"}>
                
                <button className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-md">
                  Register
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
