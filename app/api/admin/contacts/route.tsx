import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ai-solution');
    const contacts = await db.collection('contacts').find({}).toArray();

    return NextResponse.json(contacts, { status: 200 });
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to fetch contacts', details: error.message }, { status: 500 });
    }
    
    // Fallback in case the error is not an instance of Error
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
