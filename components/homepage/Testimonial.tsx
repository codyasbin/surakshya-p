"use client";

import { useState, useEffect } from "react";

// Define the structure for the testimonial data
interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

// Sample testimonials for demonstration
const sampleTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d3?w=150&h=150&fit=crop&crop=face",
    feedback: "Their AI solutions transformed our business operations completely. The results exceeded all expectations.",
    rating: 5
  },
  {
    _id: "2", 
    name: "Michael Chen",
    role: "CTO, DataFlow Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    feedback: "Outstanding service and cutting-edge technology. Their team delivered exactly what we needed.",
    rating: 5
  },
  {
    _id: "3",
    name: "Emily Rodriguez",
    role: "VP Marketing, StartupX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    feedback: "The AI implementation was seamless and the ROI has been incredible. Highly recommended!",
    rating: 4.5
  },
  {
    _id: "4",
    name: "David Kim",
    role: "Director, InnovateLab",
    image: "",
    feedback: "Professional, efficient, and innovative. They truly understand AI and business needs.",
    rating: 5
  }
];

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch testimonials from the API
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setTestimonials(data);
      } else {
        console.error("Failed to fetch testimonials:", data.error);
        // Use sample data as fallback
        setTestimonials(sampleTestimonials);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      // Use sample data as fallback
      setTestimonials(sampleTestimonials);
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

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Render avatar with fallback
  const renderAvatar = (testimonial: Testimonial, size: string = "w-20 h-20") => {
    if (testimonial.image && testimonial.image.trim() !== "") {
      return (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={`${size} rounded-full mx-auto object-cover border-4 border-cyan-600 shadow-lg`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
      );
    }
    
    return (
      <div className={`${size} rounded-full mx-auto bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold shadow-lg border-4 border-white`}>
        {getInitials(testimonial.name)}
      </div>
    );
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-300 text-xl">★</span>
      );
    }

    // Fill remaining stars
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <span key={i} className="text-gray-300 text-xl">★</span>
      );
    }

    return stars;
  };

  // Fetch testimonials on mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (testimonials.length > 0 && isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 4000);
      return () => clearInterval(interval);
    }
  }, [testimonials, isAutoPlaying]);

  if (testimonials.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading testimonials...</div>
      </section>
    );
  }

  return (
    <section 
      className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-950 relative overflow-hidden py-20"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-6">What Our Clients Say</h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Trusted by businesses across industries to deliver excellence.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-20">
          {/* Side testimonials for larger screens */}
          <div className="hidden lg:flex justify-between items-center">
            {/* Left testimonial */}
            <div 
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-80 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
              onClick={prevTestimonial}
            >
              {renderAvatar(testimonials[(activeIndex + testimonials.length - 1) % testimonials.length], "w-16 h-16")}
              <div className="text-center mt-4">
                <h4 className="text-white font-semibold">
                  {testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name}
                </h4>
                <p className="text-cyan-300 text-sm">
                  {testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].role}
                </p>
              </div>
            </div>

            {/* Center (active) testimonial */}
            <div className="bg-white/15 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 w-96 mx-8 transform transition-all duration-500">
              <div className="text-center">
                {renderAvatar(testimonials[activeIndex], "w-24 h-24")}
                
                <div className="mt-6 mb-6">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  
                  <blockquote className="text-white text-lg italic leading-relaxed">
                    "{testimonials[activeIndex].feedback}"
                  </blockquote>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-white font-bold text-xl">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-cyan-300">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right testimonial */}
            <div 
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-80 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
              onClick={nextTestimonial}
            >
              {renderAvatar(testimonials[(activeIndex + 1) % testimonials.length], "w-16 h-16")}
              <div className="text-center mt-4">
                <h4 className="text-white font-semibold">
                  {testimonials[(activeIndex + 1) % testimonials.length].name}
                </h4>
                <p className="text-cyan-300 text-sm">
                  {testimonials[(activeIndex + 1) % testimonials.length].role}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile testimonial display */}
          <div className="lg:hidden">
            <div className="bg-white/15 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30 max-w-md mx-auto">
              <div className="text-center">
                {renderAvatar(testimonials[activeIndex], "w-20 h-20")}
                
                <div className="mt-6 mb-6">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  
                  <blockquote className="text-white text-lg italic leading-relaxed">
                    "{testimonials[activeIndex].feedback}"
                  </blockquote>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-white font-bold text-xl">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-cyan-300">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center space-y-8">
          {/* Dots indicator */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-md text-white transition-all duration-300"
            >
              Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-md text-white transition-all duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}