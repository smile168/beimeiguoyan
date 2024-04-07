import { MongoClient } from 'mongodb';

export async function GET() {
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get('id');
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db('Beimeiguoyan');
  const collection = db.collection('Cigarettes');
  // console.log(await collection.findOne({ id: 'abc' }));
  return new Response(JSON.stringify(await collection.findOne({ id: 'abc' })));
}
