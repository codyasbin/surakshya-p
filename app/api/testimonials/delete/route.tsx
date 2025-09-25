import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // MongoDB client
import { ObjectId } from 'mongodb';
export async function DELETE(request: Request) {
  try {
    // Parse query parameters
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("ai-solution"); // Database name
    const result = await db.collection("testimonials").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Feedback deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: "Error deleting feedback", details: error.message }, { status: 500 });
  }
}
