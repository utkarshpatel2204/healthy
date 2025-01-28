import { MongoClient } from "mongodb";

// Ensure the environment variable exists and is a string
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined. Please add it to your .env.local file.");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend the global object type
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Ensure the client is initialized once in the global context
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
