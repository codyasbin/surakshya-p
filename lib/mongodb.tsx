import { MongoClient, MongoClientOptions } from 'mongodb';

// Type declaration for the global scope to store MongoClientPromise
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri: string | undefined = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client: MongoClient; 
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Add MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalThis._mongoClientPromise = client.connect().then((client) => {
      const db = client.db('ai-solution'); // Specify the database here
      console.log(`Connected to MongoDB: ${db.databaseName}`);
      return client;
    });
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then((client) => {
    const db = client.db('ai-solution'); // Specify the database here
    console.log(`Connected to MongoDB: ${db.databaseName}`);
    return client;
  });
}

export default clientPromise;
