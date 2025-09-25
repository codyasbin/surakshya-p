import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface NewTestimonial {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: NewTestimonial = await request.json();
    const client = await clientPromise;
    const db = client.db("ai-solution");

    const result = await db.collection("testimonials").insertOne(body);

    return NextResponse.json(
      { message: "Testimonial added successfully!", id: result.insertedId },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to add testimonial", details: error.message },
      { status: 500 }
    );
  }
}
