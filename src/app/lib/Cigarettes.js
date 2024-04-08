import { MongoClient } from 'mongodb';

export async function getCigarettes() {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db('Beimeiguoyan');
  const collection = db.collection('Cigarettes');
  return collection.find({}).toArray();
}
