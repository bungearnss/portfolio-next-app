import { MongoClient, ServerApiVersion  } from "mongodb";

const mongoUri = process.env.MONGODB_URI;


let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(mongoUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
clientPromise = client.connect();

export default clientPromise;