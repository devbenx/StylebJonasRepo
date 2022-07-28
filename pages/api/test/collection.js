import { ObjectId }  from 'mongodb';
import clientPromise from '../../../lib/mongodb'

export default async function handler(req, res) {

      const client = await clientPromise;

      switch (req.method) {
            case "DELETE":
                  const reqts = req.body;

                  console.log({reqts})

                  const dbDelete = client.db(req.body.database);

                  await dbDelete.collection(req.body.collection).deleteOne({ "_id" : ObjectId(req.body.data.id) });

                  res.json(req.body);
                  break;

            case "POST":
                  const dbPost = client.db(req.body.database);

                  await dbPost.collection(req.body.collection).insertOne(req.body.data);

                  res.json(req.body);
                  break;

            case "GET":
                  const dbGet = client.db(req.query.database);
                  const data = await dbGet.collection(req.query.collection).find({}).sort({_id:-1}).toArray();
                  // const names = await db().command({ listCollections: 1.0, authorizedCollections: true, nameOnly: true });
                  // const listCollections = await db.listCollections().toArray();
                  // const listCollectionsNames = await listCollections.map(collection => collection.name);

                  res.json({ status: 200, data: data });
                  break;
            case "PUT":
                  const dbPut = client.db("services");
                  const reqt = req.body;
                  const query = { "_id" : ObjectId(req.body.id)};

                  console.log({reqt})

                  const toUpdateQuery = req.body.data;

                  const editData = await dbPut.collection(req.body.collection).updateOne(query, { $set:toUpdateQuery})
                  console.log({editData})
                  res.json({ status: 200, data: editData });
                  break;
      }
}