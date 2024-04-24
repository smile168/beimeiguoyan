'use server';
import { MongoClient, ObjectId } from 'mongodb';

export async function getCigarettes() {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  try {
    await client.connect();
    const cigarettesCollection = client
      .db('Beimeiguoyan')
      .collection('Cigarettes');
    return await cigarettesCollection.find({}).toArray();
  } finally {
    await client.close();
  }
}

export async function deleteCigarette(id) {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const cigarettesCollection = client
    .db('Beimeiguoyan')
    .collection('Cigarettes');
  await cigarettesCollection.deleteOne({ _id: new ObjectId(id) });
  client.close();
}

export async function insertOneCigarette(cig) {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const cigarettesCollection = client
    .db('Beimeiguoyan')
    .collection('Cigarettes');
  await cigarettesCollection.insertOne(cig);
  client.close();
}

export async function updateCigarette(cig) {
  console.log(cig);
  cig._id = new ObjectId(cig._id);
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const cigarettesCollection = client
    .db('Beimeiguoyan')
    .collection('Cigarettes');
  await cigarettesCollection.updateOne({ _id: cig._id }, { $set: { ...cig } });
  client.close();
}

export async function getCigarette(id) {
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k20f2xq.mongodb.net/`;
  const client = new MongoClient(url);
  try {
    await client.connect();
    const cigarettesCollection = client
      .db('Beimeiguoyan')
      .collection('Cigarettes');
    const cigarette = await cigarettesCollection.findOne({
      _id: new ObjectId(id),
    });

    return cigarette;
  } finally {
    await client.close();
  }
}
