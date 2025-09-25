import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// Define the expected shape of the request body
interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional fields
  company?: string;
  country?: string;
  jobTitle?: string;
  jobDetails: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, jobDetails } = body;
    if (!name || !email || !jobDetails) {
      return NextResponse.json(
        { error: "Name, email, and job details are required." },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;

    // Explicitly select the "ai-solution" database
    const db = client.db("ai-solution");

    // Insert the data into the 'contacts' collection
    const result = await db.collection("contacts").insertOne(body);

    // Respond with success message
    return NextResponse.json(
      { message: "Form submitted successfully!", id: result.insertedId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error handling contact form submission:", error);

    // Handle specific error types, if necessary
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    // General error response
    return NextResponse.json(
      { error: "Failed to submit form", details: error.message },
      { status: 500 }
    );
  }
}
