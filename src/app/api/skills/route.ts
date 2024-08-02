import { NextResponse } from 'next/server';
import clientPromise from '../../server/mongo/MongoClient';

export async function GET() {
  const dbName = process.env.MONGODB_NAME!;
  const collectionName = process.env.MONGODB_COL_SKILL!;
  
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}