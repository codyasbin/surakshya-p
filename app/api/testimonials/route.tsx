import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

// Define the Testimonial interface, including all fields
interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export async function GET(): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db("ai-solution");

    // Fetch the testimonials and map them to the Testimonial interface
    const testimonials = await db
      .collection("testimonials")
      .find({})
      .toArray();

    // Map the fetched documents to the Testimonial type
    const mappedTestimonials: Testimonial[] = testimonials.map((testimonial) => ({
      _id: testimonial._id.toString(), // Convert ObjectId to string
      name: testimonial.name,
      role: testimonial.role,
      image: testimonial.image,
      feedback: testimonial.feedback,
      rating: testimonial.rating,
    }));

    return NextResponse.json(mappedTestimonials, { status: 200 });
  } catch (error: unknown) {
    // Handle error properly with error message
    if (error instanceof Error) {
      return NextResponse.json({ error: "Failed to fetch testimonials", details: error.message }, { status: 500 });
    }

    // Fallback for unknown errors
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
