// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.data;
    console.log("data", data);
    const client = await MongoClient.connect(
      "mongodb+srv://admin:AMyXYQ6PwgAIJEwp@nextjslearn.lo0bjdq.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("result", result);
    client.close();
    res.json({ message: "Meetup inserted" });
  }
}

export default handler;
