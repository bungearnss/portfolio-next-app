import { NextResponse } from 'next/server';
import clientPromise from '../../server/mongo/MongoClient';
import { encrypt } from '../../utils/CryptoUtils';

export async function GET() {
  const dbName = process.env.MONGODB_NAME!;
  const collectionName = process.env.MONGODB_COL_CERT!;
  
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();

    const encryptedData = data.map((item) => ({
      ...item,
      img: encrypt(item.img),
      url: encrypt(item.url)
    }));
    
    return NextResponse.json(encryptedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}