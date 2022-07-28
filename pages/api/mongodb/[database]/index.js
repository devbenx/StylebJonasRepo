import { useRouter } from 'next/router';
import clientPromise from '../../../../lib/mongodb'

export default async function handler(req, res) {

      const client = await clientPromise;
      
      const { database } = req.query
      const db = client.db(database);

      switch (req.method) {

            case "GET":
                  // const dbGet = client.db(database);

                  // const listCollections = await dbGet.listCollections().toArray();

                  const listCollections = await db.listCollections().toArray();

                  const listCollectionsNames = await listCollections.map(collection => collection.name);

                  res.json({ status: 200, data: listCollectionsNames });
                  break;

            case "POST":
                  // const dbPost = client.db(database);
                  // await dbPost.createCollection(req.body.collection);

                  await db.createCollection(req.body.collection);

                  res.json(req.body);
                  break;

            // case "DELETE":
            //       await db.collection(req.body.collection).deleteOne({ "_id" : ObjectId(req.body.data.id) });

            //       res.json(req.body);
            //       break;

            case "PUT":

                  // const dbPut = client.db(database);

                  // const query = { "_id" : ObjectId(req.body.id)};

                  // const toUpdateQuery = req.body.data;

                  // const editData = await db.collection(req.body.collection).updateOne(query, { $set:toUpdateQuery})
                  // console.log({editData})
                  await db.renameCollection(req.body.collection, req.body.rename)
                  res.json({ status: 200, data: req.body.rename });
                  break;
      }
}
