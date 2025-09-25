import CaseStudy from "@/components/homepage/CaseStudy";
import FeedbackForm from "@/components/homepage/FeedbackForm";
import FloatingButton from "@/components/homepage/FloatingButton";
import Hero from "@/components/homepage/Hero";
import Main from "@/components/homepage/Main";
import Testimonial from "@/components/homepage/Testimonial";
import React from "react";

export default function page() {
  return (
    <>
     <Hero/>
     <Main/>
     <CaseStudy/>
     <Testimonial/>
     <FeedbackForm/>
     <FloatingButton/>
    </>
  );
}
